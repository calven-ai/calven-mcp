import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import Ajv from 'ajv';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import { parse as parseYaml } from 'yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const ENDPOINT = 'https://api.calven.ai/mcp';
const EXPECTED_TOOLS = [
  'get_workspace_overview',
  'list_products',
  'get_strategy_document',
  'list_documents',
  'read_document',
  'list_records',
  'get_record',
  'get_competitor',
  'get_persona',
  'get_insights',
  'get_insights_overview',
  'get_insight_detail',
  'review_against_personas',
  'get_task',
];
// Tools that are not read-only. Prose such as "Thirteen read tools and one action" must agree with this split.
const ACTION_TOOLS = ['review_against_personas'];
const READ_TOOL_COUNT = EXPECTED_TOOLS.length - ACTION_TOOLS.length;

// Endpoint-looking URLs (any *.calven.ai host other than the website, with an `mcp` path segment)
// may only take these exact forms. https://calven.ai/mcp is the website page, not an endpoint.
const ALLOWED_ENDPOINT_URLS = new Set([
  ENDPOINT,
  'https://api.calven.ai/.well-known/oauth-protected-resource/mcp',
  'https://api.calven.ai/.well-known/oauth-authorization-server/mcp',
]);
const WEBSITE_HOSTS = new Set(['calven.ai', 'www.calven.ai']);
// The retired endpoint may appear only where migration history is recorded.
const LEGACY_ENDPOINTS = new Map([['https://app.calven.ai/api/mcp', ['CHANGELOG.md']]]);

const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

async function json(relativePath) {
  try {
    return JSON.parse(await readFile(path.join(ROOT, relativePath), 'utf8'));
  } catch (error) {
    failures.push(`${relativePath}: ${error.message}`);
    return {};
  }
}

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await filesUnder(absolute)));
    else files.push(absolute);
  }
  return files;
}

async function validateSchemas(documents) {
  if (process.argv.includes('--offline')) return;

  for (const [file, document] of documents) {
    const schemaUrl = document.$schema;
    check(typeof schemaUrl === 'string', `${file}: missing $schema`);
    if (typeof schemaUrl !== 'string') continue;

    const response = await fetch(schemaUrl, { signal: AbortSignal.timeout(15_000) });
    check(response.ok, `${file}: failed to fetch schema ${schemaUrl} (${response.status})`);
    if (!response.ok) continue;

    const schema = await response.json();
    const AjvClass = schema.$schema?.includes('draft-07') ? Ajv : Ajv2020;
    const ajv = new AjvClass({ allErrors: true, strict: false });
    addFormats(ajv);
    try {
      const validate = ajv.compile(schema);
      if (!validate(document)) {
        failures.push(`${file}: schema validation failed: ${ajv.errorsText(validate.errors, { separator: '; ' })}`);
      }
    } catch (error) {
      failures.push(`${file}: could not compile schema: ${error.message}`);
    }
  }
}

async function validateSkills() {
  const skillsDir = path.join(ROOT, 'skills');
  const entries = await readdir(skillsDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const relative = `skills/${entry.name}/SKILL.md`;
    let source;
    try {
      source = await readFile(path.join(ROOT, relative), 'utf8');
    } catch {
      failures.push(`${relative}: missing`);
      continue;
    }

    const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
    check(Boolean(frontmatter), `${relative}: missing YAML frontmatter`);
    if (!frontmatter) continue;

    let meta;
    try {
      meta = parseYaml(frontmatter[1]);
    } catch (error) {
      failures.push(`${relative}: frontmatter is not valid YAML: ${error.message.split('\n')[0]}`);
      continue;
    }
    if (!meta || typeof meta !== 'object' || Array.isArray(meta)) {
      failures.push(`${relative}: frontmatter must be a YAML mapping`);
      continue;
    }

    // Agent Skills specification: https://agentskills.io/specification
    const { name, description, compatibility } = meta;
    if (typeof name !== 'string') {
      failures.push(`${relative}: name must be a string`);
    } else {
      check(name.length >= 1 && name.length <= 64, `${relative}: name must be 1-64 characters (got ${name.length})`);
      check(/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name), `${relative}: name "${name}" must be lowercase letters, digits, and single hyphens, with no leading or trailing hyphen`);
      check(name === entry.name, `${relative}: name "${name}" must match directory (${entry.name})`);
    }
    if (typeof description !== 'string') {
      failures.push(`${relative}: description must be a string`);
    } else {
      check(description.trim().length >= 1 && description.length <= 1024, `${relative}: description must be 1-1024 characters (got ${description.length})`);
    }
    if (compatibility !== undefined) {
      check(typeof compatibility === 'string' && compatibility.length >= 1 && compatibility.length <= 500, `${relative}: compatibility must be a 1-500 character string`);
    }

    const mentionedTools = [...source.matchAll(/`((?:get|list|read|review)_[a-z0-9_]+)`/g)].map((match) => match[1]);
    for (const tool of mentionedTools) {
      check(EXPECTED_TOOLS.includes(tool), `${relative}: references unknown tool ${tool}`);
    }
  }
}

const USE_CASE_SECTIONS = ['## Prompts', '## Ad hoc questions'];
const INTERNAL_SECTIONS = ['## What the team is trying to do', '## The work, end to end', '## Good practice', '## Not covered today'];

async function validateUseCases() {
  const dir = path.join(ROOT, 'use-cases');
  let count = 0;
  for (const absolute of await filesUnder(dir)) {
    const relative = path.relative(ROOT, absolute);
    if (!relative.endsWith('.md') || path.basename(relative) === 'README.md' || relative === 'use-cases/prompt-patterns.md') continue;
    const source = await readFile(absolute, 'utf8');
    count += 1;
    for (const section of USE_CASE_SECTIONS) {
      check(source.includes(`\n${section}\n`), `${relative}: missing section "${section}"`);
    }
    for (const section of INTERNAL_SECTIONS) {
      check(!source.includes(`\n${section}\n`), `${relative}: internal section "${section}" must not be published`);
    }
    check(!/^### (Steps?|Review mode)\b/m.test(source), `${relative}: prompt headline names a step, not what the prompt gets you`);
    for (const match of source.matchAll(/\]\(([^)]+\.md)(?:#[^)]*)?\)/g)) {
      const target = path.resolve(path.dirname(absolute), match[1]);
      check(await readFile(target, 'utf8').then(() => true, () => false), `${relative}: broken link ${match[1]}`);
    }
  }
  check(count > 0, 'use-cases/: no pages found');
  return count;
}

// Server maps used by MCP clients: mcpServers (Claude, Cursor, generic), servers (VS Code mcp.json),
// mcp.servers (VS Code settings.json, found by the recursive walk), mcp_servers (Codex in JSON form).
const SERVER_MAP_KEYS = new Set(['mcpServers', 'servers', 'mcp_servers']);
const SERVER_URL_KEYS = ['url', 'serverUrl', 'httpUrl'];

function serverEntries(value, trail = []) {
  const entries = [];
  if (!value || typeof value !== 'object') return entries;
  for (const [key, child] of Object.entries(value)) {
    if (SERVER_MAP_KEYS.has(key) && child && typeof child === 'object' && !Array.isArray(child)) {
      for (const [serverName, server] of Object.entries(child)) entries.push([[...trail, key, serverName].join('.'), server]);
    } else {
      entries.push(...serverEntries(child, [...trail, key]));
    }
  }
  return entries;
}

async function validateExamples() {
  const dir = path.join(ROOT, 'examples');
  let configs = 0;
  for (const absolute of await filesUnder(dir)) {
    const relative = path.relative(ROOT, absolute);
    const source = await readFile(absolute, 'utf8');
    if (relative.endsWith('.json')) {
      configs += 1;
      let document;
      try {
        document = JSON.parse(source);
      } catch (error) {
        failures.push(`${relative}: invalid JSON: ${error.message}`);
        continue;
      }
      const entries = serverEntries(document);
      check(entries.length > 0, `${relative}: no MCP server entry under mcpServers, servers, or mcp_servers`);
      for (const [where, server] of entries) {
        const urls = SERVER_URL_KEYS.filter((key) => server?.[key] !== undefined).map((key) => [key, server[key]]);
        check(urls.length === 1, `${relative}: ${where} must set exactly one of ${SERVER_URL_KEYS.join(', ')}`);
        for (const [key, url] of urls) {
          check(url === ENDPOINT, `${relative}: ${where}.${key} is ${JSON.stringify(url)}, expected ${ENDPOINT}`);
        }
      }
    } else if (relative.endsWith('.toml')) {
      configs += 1;
      const urls = [...source.matchAll(/^\s*(?:url|server_url)\s*=\s*["']([^"']*)["']/gm)].map((match) => match[1]);
      check(urls.length > 0, `${relative}: no url = "..." entry found`);
      for (const url of urls) check(url === ENDPOINT, `${relative}: url is ${JSON.stringify(url)}, expected ${ENDPOINT}`);
    }
  }
  check(configs > 0, 'examples/: no JSON or TOML client examples found');
  return configs;
}

function lineOf(source, index) {
  return source.slice(0, index).split('\n').length;
}

// Every *.calven.ai URL that looks like an MCP endpoint must be one of ALLOWED_ENDPOINT_URLS.
// Endpoint-looking = host is not the website (calven.ai, www.calven.ai) and the path has an `mcp` segment,
// or the host itself starts with `mcp.`.
function checkEndpointUrls(relative, source) {
  for (const match of source.matchAll(/https?:\/\/(?:[a-z0-9-]+\.)*calven\.ai(?::\d+)?(?:[/?#][^\s"'`<>()[\]{}|\\]*)?/gi)) {
    const raw = match[0].replace(/[.,;:!?*_]+$/, '');
    let url;
    try {
      url = new URL(raw);
    } catch {
      continue;
    }
    const host = url.hostname.toLowerCase();
    if (WEBSITE_HOSTS.has(host)) continue;
    const segments = url.pathname.toLowerCase().split('/');
    if (!segments.includes('mcp') && !host.startsWith('mcp.')) continue;
    if (ALLOWED_ENDPOINT_URLS.has(raw)) continue;
    if (LEGACY_ENDPOINTS.get(raw)?.includes(relative)) continue;
    failures.push(`${relative}:${lineOf(source, match.index)}: endpoint URL ${raw} is not allowed; use ${ENDPOINT} (or its .well-known metadata URL)`);
  }
}

// One-click install links carry the endpoint encoded: Cursor uses base64 JSON in `config`,
// VS Code uses URL-encoded JSON in `config` (vscode.dev redirect) or as the whole query (vscode: scheme).
function checkInstallLinks(relative, source) {
  for (const match of source.matchAll(/(?:https?:\/\/|cursor:\/\/|vscode(?:-insiders)?:)[^\s"'`<>()[\]]*(?:install-mcp|mcp\/install)\?[^\s"'`<>()[\]]*/gi)) {
    const raw = match[0].replace(/&amp;/g, '&');
    const where = `${relative}:${lineOf(source, match.index)}`;
    const query = raw.slice(raw.indexOf('?') + 1);
    const candidates = [];
    const config = new URLSearchParams(query).get('config');
    // An empty config is a placeholder in prose (`config=<base64 ...>`), not a working link.
    if (config === '') continue;
    if (config !== null) {
      candidates.push(config);
      candidates.push(Buffer.from(config.replace(/ /g, '+'), 'base64').toString('utf8'));
    }
    try {
      candidates.push(decodeURIComponent(query));
    } catch {
      // not URI-encoded JSON
    }
    let decoded;
    for (const candidate of candidates) {
      try {
        decoded = JSON.parse(candidate);
        break;
      } catch {
        // try the next encoding
      }
    }
    if (!decoded || typeof decoded !== 'object') {
      failures.push(`${where}: could not decode the MCP config in install link ${raw.slice(0, 80)}...`);
      continue;
    }
    const url = decoded.url ?? decoded.serverUrl;
    check(url === ENDPOINT, `${where}: install link config url is ${JSON.stringify(url)}, expected ${ENDPOINT}`);
  }
}

const NUMBER_WORDS = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17,
  eighteen: 18, nineteen: 19, twenty: 20,
};
const NUM = `(\\d+|${Object.keys(NUMBER_WORDS).join('|')})`;
const toNumber = (token) => (/^\d+$/.test(token) ? Number(token) : NUMBER_WORDS[token.toLowerCase()]);
// Only counts of five or more are treated as catalog claims; smaller counts ("two tools", "three Insights tools")
// describe subsets. Qualifiers are limited to words that describe the whole catalog.
const CATALOG_COUNT = new RegExp(`(?<!\\b(?:these|those|other|first|last|next|top)\\s)\\b${NUM}(?:[- ](?:Calven|MCP|public|documented|focused|production|available))*[- ]tools?\\b`, 'gi');
const READ_COUNT = new RegExp(`\\b${NUM}[- ]read(?:-only)?[- ]tools?\\b`, 'gi');
const ACTION_COUNT = new RegExp(`\\b${NUM}[- ]read(?:-only)?[- ]tools?,?\\s+(?:and|plus)\\s+${NUM}(?:[- ](?:non-destructive|review|write))*[- ]actions?\\b`, 'gi');

// Prose that states the size of the tool catalog must agree with EXPECTED_TOOLS.
// Quoted text ("11 tools") is a quotation, not a claim, and is skipped in Markdown.
// CHANGELOG.md is checked only in its [Unreleased] section; released entries are history.
function checkToolCounts(relative, source) {
  let text = source;
  if (relative === 'CHANGELOG.md') {
    const released = text.search(/^## \[(?!Unreleased\])/m);
    if (released !== -1) text = text.slice(0, released);
  }
  if (relative.endsWith('.md')) text = text.replace(/"[^"\n]*"|“[^”\n]*”/g, (quoted) => ' '.repeat(quoted.length));
  for (const match of text.matchAll(CATALOG_COUNT)) {
    const count = toNumber(match[1]);
    if (count < 5) continue;
    check(count === EXPECTED_TOOLS.length, `${relative}:${lineOf(text, match.index)}: "${match[0]}" disagrees with the ${EXPECTED_TOOLS.length}-tool catalog`);
  }
  for (const match of text.matchAll(READ_COUNT)) {
    const count = toNumber(match[1]);
    if (count < 5) continue;
    check(count === READ_TOOL_COUNT, `${relative}:${lineOf(text, match.index)}: "${match[0]}" disagrees with ${READ_TOOL_COUNT} read tools`);
  }
  for (const match of text.matchAll(ACTION_COUNT)) {
    const count = toNumber(match[2]);
    check(count === ACTION_TOOLS.length, `${relative}:${lineOf(text, match.index)}: "${match[0]}" disagrees with ${ACTION_TOOLS.length} action tool(s)`);
  }
}

const PROSE_EXTENSIONS = new Set(['.md', '.json', '.yml', '.yaml', '.toml']);

async function validatePublicText() {
  for (const absolute of await filesUnder(ROOT)) {
    const relative = path.relative(ROOT, absolute);
    if (relative.startsWith(`use-cases${path.sep}`) || relative === 'package-lock.json' || relative === 'package.json') continue;
    const extension = path.extname(relative);
    if (!PROSE_EXTENSIONS.has(extension)) continue;
    const source = await readFile(absolute, 'utf8');
    checkEndpointUrls(relative, source);
    checkInstallLinks(relative, source);
    if (extension === '.md' || extension === '.json') checkToolCounts(relative, source);
  }
}

const server = await json('server.json');
const plugin = await json('plugin.json');
const portableMcp = await json('mcp.json');
const compatibilityMcp = await json('.mcp.json');

check(server.name === 'ai.calven/mcp', 'server.json: expected registry name ai.calven/mcp');
check(server.remotes?.length === 1, 'server.json: expected one canonical remote');
check(server.remotes?.[0]?.type === 'streamable-http', 'server.json: expected Streamable HTTP');
check(server.remotes?.[0]?.url === ENDPOINT, 'server.json: endpoint drift');
check(plugin.name === 'calven', 'plugin.json: expected plugin name calven');
check(plugin.repository === 'https://github.com/calven-ai/calven-mcp', 'plugin.json: repository drift');
check(portableMcp.mcpServers?.calven?.type === 'streamable-http', 'mcp.json: expected Streamable HTTP');
check(portableMcp.mcpServers?.calven?.url === ENDPOINT, 'mcp.json: endpoint drift');
check(compatibilityMcp.mcpServers?.calven?.type === 'http', '.mcp.json: expected native http transport name');
check(compatibilityMcp.mcpServers?.calven?.url === ENDPOINT, '.mcp.json: endpoint drift');

const catalog = await readFile(path.join(ROOT, 'docs/tool-catalog.md'), 'utf8');
const catalogTools = [...catalog.matchAll(/^\| `([a-z0-9_]+)` \|/gm)].map((match) => match[1]);
check(JSON.stringify(catalogTools) === JSON.stringify(EXPECTED_TOOLS), 'docs/tool-catalog.md: tool list or order drift');

await validateSkills();
await validateUseCases();
const exampleCount = await validateExamples();
await validatePublicText();
await validateSchemas([
  ['server.json', server],
  ['plugin.json', plugin],
  ['mcp.json', portableMcp],
]);

for (const absolute of await filesUnder(ROOT)) {
  const relative = path.relative(ROOT, absolute);
  if (relative === 'package-lock.json' || relative === 'LICENSE') continue;
  const source = await readFile(absolute, 'utf8');
  check(!/cmcp_[A-Za-z0-9_-]{20,}/.test(source), `${relative}: looks like a committed Calven MCP key`);
  check(!/\bCalven\.ai\b|\bCalven AI\b/.test(source), `${relative}: use Calven as the brand name`);
}

if (failures.length > 0) {
  console.error('Public surface validation failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Validated ${EXPECTED_TOOLS.length} tools, 4 manifests, ${exampleCount} client examples, endpoint URLs and tool counts in public docs, the portable skills, and the use-case library.`);
