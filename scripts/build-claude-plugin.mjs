import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const TARGET = path.join(ROOT, 'plugins/calven');
const CHECK = process.argv.includes('--check');
const expected = new Map();

async function source(relative) {
  return readFile(path.join(ROOT, relative));
}

async function files(directory, prefix = '') {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
  const found = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) found.push(...await files(path.join(directory, entry.name), relative));
    else if (entry.isFile()) found.push(relative);
    else throw new Error(`${relative}: only regular files and directories are supported`);
  }
  return found;
}

function section(markdown, heading) {
  const marker = `## ${heading}\n`;
  const start = markdown.indexOf(marker);
  if (start === -1) throw new Error(`README source is missing ${heading}`);
  const body = markdown.slice(start + marker.length);
  const end = body.indexOf('\n## ');
  return (end === -1 ? body : body.slice(0, end)).trim();
}

function publicLinks(markdown) {
  return markdown.replace(/\]\(((?:docs|use-cases|skills|agents)\/[^)]+)\)/g, (_, relative) => {
    const kind = relative.endsWith('/') ? 'tree' : 'blob';
    return `](https://github.com/calven-ai/calven-mcp/${kind}/main/${relative})`;
  });
}

const manifest = JSON.parse(await source('.claude-plugin/plugin.json'));
const mcp = JSON.parse(await source('.mcp.json'));
// Runtime inputs only. Developer tooling remains outside the directory submission.
expected.set('.claude-plugin/plugin.json', Buffer.from(`${JSON.stringify({ ...manifest, mcpServers: mcp.mcpServers }, null, 2)}\n`));
expected.set('LICENSE', await source('LICENSE'));
expected.set('assets/icon.png', await source('assets/icon.png'));

const readme = (await source('README.md')).toString('utf8');
const dataHandling = (await source('docs/data-handling.md')).toString('utf8');
const intro = readme.match(/^Calven is the AI product marketing platform\.[^\n]+/m)?.[0];
if (!intro) throw new Error('README source is missing the Calven introduction');
const connection = section(readme, 'Connect').split('<details>')[0].trim();
const help = section(readme, 'Help').split('\n\n')[0];
const generatedReadme = [
  '<!-- GENERATED from repository sources by scripts/build-claude-plugin.mjs. Do not edit directly. -->',
  '# Calven', intro,
  '## Connect', connection,
  '## Workflows', section(readme, 'The plugin'),
  '## Data and permissions', section(dataHandling, 'Access boundary'), section(dataHandling, 'What may be returned'),
  '[Privacy policy](https://calven.ai/privacy) · [Terms](https://calven.ai/terms)',
  '## Help', help,
].join('\n\n');
expected.set('README.md', Buffer.from(`${publicLinks(generatedReadme)}\n`));

const skillDirectories = (await readdir(path.join(ROOT, 'skills'), { withFileTypes: true }))
  .filter(entry => entry.isDirectory()).map(entry => entry.name).sort();
for (const skill of skillDirectories) {
  for (const file of await files(path.join(ROOT, 'skills', skill))) {
    const relative = `skills/${skill}/${file}`;
    expected.set(relative, await source(relative));
  }
}
for (const file of await files(path.join(ROOT, 'agents'))) {
  if (!file.endsWith('.md')) throw new Error(`agents/${file}: agents must be Markdown files`);
  expected.set(`agents/${file}`, await source(`agents/${file}`));
}

const allowedText = new Set(['.md', '.txt', '.json', '.yaml', '.yml']);
const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
for (const [relative, bytes] of expected) {
  if (relative.split('/').some(part => part === '..' || /[<>:"\\|?*\x00-\x1f]/.test(part) || /[. ]$/.test(part))) {
    throw new Error(`${relative}: unsupported path`);
  }
  if (relative === 'assets/icon.png') {
    if (!bytes.subarray(0, 8).equals(pngSignature)) throw new Error('Plugin icon must be a PNG');
    continue;
  }
  if (relative !== 'LICENSE' && !allowedText.has(path.extname(relative))) {
    throw new Error(`${relative}: scripts and unsupported file types cannot ship in the Claude directory bundle`);
  }
  const text = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  if (text.includes('\0') || text.trimStart().startsWith('#!')) throw new Error(`${relative}: executable or invalid text`);
  if (bytes.length > 256 * 1024) throw new Error(`${relative}: exceeds the directory text-file limit`);
}
if (expected.size > 512) throw new Error('Claude bundle exceeds the directory file-count limit');

const actual = await files(TARGET);
const unexpected = actual.filter(relative => !expected.has(relative));
if (unexpected.length) throw new Error(`Unexpected files in generated bundle: ${unexpected.join(', ')}`);
const stale = [];
for (const [relative, bytes] of expected) {
  let existing;
  try { existing = await readFile(path.join(TARGET, relative)); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  if (existing?.equals(bytes)) continue;
  if (CHECK) stale.push(relative);
  else {
    await mkdir(path.dirname(path.join(TARGET, relative)), { recursive: true });
    await writeFile(path.join(TARGET, relative), bytes);
  }
}
if (stale.length) throw new Error(`Claude bundle is stale; run node scripts/build-claude-plugin.mjs: ${stale.join(', ')}`);
console.log(`${CHECK ? 'Checked' : 'Built'} Claude directory bundle: ${expected.size} files, ${skillDirectories.length} skills, ${[...expected.keys()].filter(file => file.startsWith('agents/')).length} agent, ${Object.keys(mcp.mcpServers).length} remote MCP server.`);
