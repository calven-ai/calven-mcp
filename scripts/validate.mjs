import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import Ajv from 'ajv';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

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

    const frontmatter = source.match(/^---\n([\s\S]*?)\n---\n/);
    check(Boolean(frontmatter), `${relative}: missing YAML frontmatter`);
    if (!frontmatter) continue;

    const name = frontmatter[1].match(/^name:\s*(.+)$/m)?.[1]?.trim();
    const description = frontmatter[1].match(/^description:\s*(.+)$/m)?.[1]?.trim();
    check(name === entry.name, `${relative}: name must match directory (${entry.name})`);
    check(Boolean(description), `${relative}: description is required`);

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

console.log(`Validated ${EXPECTED_TOOLS.length} tools, 3 manifests, the portable skills, and the use-case library.`);
