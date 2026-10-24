// Builds the ZIP uploaded to the ChatGPT and Codex plugin directory (OpenAI Platform > Plugins > With MCP).
//
//   npm run package:openai --prefix scripts            validate, then build dist/calven-openai-<version>.zip
//   npm run package:openai --prefix scripts -- --draft  build without the demo recording, for a test upload
//
// The package holds only what OpenAI reads: plugin.json, mcp.json, skills/, the listed icons and LICENSE.
// Client-specific manifests, evals, use cases and scripts stay out.
import { execFileSync } from 'node:child_process';
import { cp, mkdir, mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import process from 'node:process';

const ROOT = path.resolve(import.meta.dirname, '..');
const draft = process.argv.includes('--draft');

// OpenAI's portal connects with OAuth. Calven's authorization server admits CIMD clients only (no DCR), so the
// declaration names CIMD and carries no client id or secret. It lives here, not in the repository's mcp.json,
// because the Agent Plugins schema allows no extensions on a server entry.
const OPENAI_AUTH = { type: 'oauth', client: { mode: 'cimd' } };

// OpenAI's archive limits.
const MAX_ENTRIES = 5000;
const MAX_COMPRESSED_BYTES = 100 * 1024 * 1024;

function fail(message) {
  console.error(`package-openai: ${message}`);
  process.exit(1);
}

execFileSync(process.execPath, [path.join(import.meta.dirname, 'validate.mjs')], { stdio: 'inherit' });

const plugin = JSON.parse(await readFile(path.join(ROOT, 'plugin.json'), 'utf8'));
const openai = plugin.extensions['com.openai'];
if (!openai.review?.demo_recording_url && !draft) {
  fail('extensions.com.openai.review.demo_recording_url is not set. Add the demo video URL, or pass --draft for a test upload.');
}

const stage = await mkdtemp(path.join(tmpdir(), 'calven-openai-'));
try {
  const root = path.join(stage, 'calven');
  await mkdir(root);
  await cp(path.join(ROOT, 'plugin.json'), path.join(root, 'plugin.json'));
  await cp(path.join(ROOT, 'LICENSE'), path.join(root, 'LICENSE'));
  await cp(path.join(ROOT, 'skills'), path.join(root, 'skills'), { recursive: true, filter: (source) => path.basename(source) !== '.DS_Store' });

  const mcp = JSON.parse(await readFile(path.join(ROOT, 'mcp.json'), 'utf8'));
  for (const server of Object.values(mcp.mcpServers)) server.extensions = { 'com.openai': { auth: OPENAI_AUTH } };
  await writeFile(path.join(root, 'mcp.json'), `${JSON.stringify(mcp, null, 2)}\n`);

  const ui = openai.interface;
  for (const key of ['logo', 'logoDark', 'composerIcon', 'composerIconDark']) {
    if (!ui[key]) continue;
    await mkdir(path.dirname(path.join(root, ui[key])), { recursive: true });
    await cp(path.join(ROOT, ui[key]), path.join(root, ui[key]));
  }

  const entries = execFileSync('find', ['.', '-type', 'f'], { cwd: stage, encoding: 'utf8' }).trim().split('\n').sort();
  if (entries.length > MAX_ENTRIES) fail(`${entries.length} files exceed OpenAI's ${MAX_ENTRIES}-entry limit`);

  const dist = path.join(ROOT, 'dist');
  await mkdir(dist, { recursive: true });
  const zipPath = path.join(dist, `calven-openai-${plugin.version}${draft ? '-draft' : ''}.zip`);
  await rm(zipPath, { force: true });
  // -X leaves out extra file attributes; -D leaves out directory entries.
  execFileSync('zip', ['-q', '-r', '-X', '-D', zipPath, 'calven'], { cwd: stage });

  const { size } = await stat(zipPath);
  if (size > MAX_COMPRESSED_BYTES) fail(`${zipPath} is ${size} bytes, over OpenAI's 100 MB limit`);

  console.log(`Built ${path.relative(ROOT, zipPath)} (${entries.length} files, ${Math.round(size / 1024)} KiB)${draft ? ' as a draft without the demo recording' : ''}:`);
  for (const entry of entries) console.log(`  ${entry.slice(2)}`);
} finally {
  await rm(stage, { recursive: true, force: true });
}
