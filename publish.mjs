#!/usr/bin/env node
/**
 * Builds the site to the REPO ROOT — GitHub Pages serves the repo root by
 * default (Settings → Pages → Deploy from a branch → main → / (root)).
 * No Pages folder setting to change: the generated HTML sits next to the
 * tooling, and the design sources stay tucked away in sources/.
 *
 *   node publish.mjs            → legacy (old) site at root, design mirrors
 *                                 at /v1 /v2 /v3
 *   node publish.mjs v3         → v3 promoted to root, other designs stay
 *                                 as mirrors, legacy retired (kept in git
 *                                 history under the "legacy-site" tag)
 *
 * Easier: double-click one of publish-*.bat.
 * After it finishes: push (GitHub Desktop → Push origin). Live in ~1–5 min.
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url)); // the repo itself = output dir
const LEGACY_TAG = 'legacy-site';
const CF_TOKEN = '4f0e8def1e514737a965ca85fcda51ab';
const PROJECTS = {
  v1: path.join(ROOT, 'sources', 'v1'),
  v2: path.join(ROOT, 'sources', 'v2'),
  v3: path.join(ROOT, 'sources', 'v3'),
};

// Repo-root entries that are TOOLING/SOURCES, never touched by a rebuild.
// Everything else at the root is generated site output and is wiped each run.
const KEEP = new Set([
  '.git',
  '.gitignore',
  '.github',
  '.claude',
  'README.md',
  'sources',
  'node_modules',
  'publish.mjs',
  'publish-legacy.bat',
  'publish-v1.bat',
  'publish-v2.bat',
  'publish-v3.bat',
]);

const rootDesign = (process.argv[2] || 'legacy').toLowerCase();
if (rootDesign !== 'legacy' && !PROJECTS[rootDesign]) {
  console.error(`Unknown root design "${rootDesign}" — use v1, v2, v3 or no argument (legacy)`);
  process.exit(1);
}
const mirrors = Object.keys(PROJECTS).filter((d) => d !== rootDesign);

function run(cmd, cwd, env = {}) {
  console.log(`\n> ${cmd}  (${path.relative(ROOT, cwd) || '.'})`);
  execSync(cmd, { cwd, stdio: 'inherit', env: { ...process.env, ...env } });
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
}

// 1) build every design for its slot
if (rootDesign !== 'legacy') {
  run('npm run build', PROJECTS[rootDesign], { BASE_PATH: '/' });
}
for (const d of mirrors) {
  run('npm run build', PROJECTS[d], { BASE_PATH: `/${d}` });
}

// 2) wipe generated output at the repo root (keep tooling + sources)
console.log('\n> clearing generated files at repo root');
for (const entry of fs.readdirSync(ROOT)) {
  if (KEEP.has(entry)) continue;
  fs.rmSync(path.join(ROOT, entry), { recursive: true, force: true });
}

// 3) root content
if (rootDesign === 'legacy') {
  console.log(`> extracting legacy site (${LEGACY_TAG}) → /`);
  const tmp = path.join(ROOT, '_legacy_tmp');
  fs.rmSync(tmp, { recursive: true, force: true });
  fs.mkdirSync(tmp);
  // relative paths on purpose: GNU tar treats "C:\..." as a remote host
  run(`git archive --format=tar -o legacy-tmp.tar ${LEGACY_TAG}`, ROOT);
  run('tar -xf legacy-tmp.tar -C _legacy_tmp', ROOT);
  fs.rmSync(path.join(ROOT, 'legacy-tmp.tar'), { force: true });

  // copy the legacy SITE files to root, but never clobber the monorepo tooling
  const SKIP = new Set(['README.md', '.gitignore', '.github']);
  for (const entry of fs.readdirSync(tmp)) {
    if (SKIP.has(entry)) continue;
    fs.cpSync(path.join(tmp, entry), path.join(ROOT, entry), { recursive: true });
  }
  fs.rmSync(tmp, { recursive: true, force: true });

  // the legacy HTML predates the analytics beacon — inject it
  const BEACON =
    `<script defer src='https://static.cloudflareinsights.com/beacon.min.js' ` +
    `data-cf-beacon='{"token": "${CF_TOKEN}"}'></script>`;
  for (const f of fs.readdirSync(ROOT).filter((n) => n.endsWith('.html'))) {
    const p = path.join(ROOT, f);
    let html = fs.readFileSync(p, 'utf8');
    if (!html.includes('cloudflareinsights') && html.includes('</head>')) {
      html = html.replace('</head>', `${BEACON}\n</head>`);
      fs.writeFileSync(p, html);
    }
  }
  console.log('> beacon injected into legacy pages');
} else {
  console.log(`> copying ${rootDesign} → /`);
  copyDir(path.join(PROJECTS[rootDesign], 'dist'), ROOT);
}

// 4) mirrors
for (const d of mirrors) {
  console.log(`> copying ${d} → /${d}`);
  copyDir(path.join(PROJECTS[d], 'dist'), path.join(ROOT, d));
}

// 5) keep the mirrors out of search results
const robots = path.join(ROOT, 'robots.txt');
if (fs.existsSync(robots)) {
  let txt = fs.readFileSync(robots, 'utf8');
  const disallows = mirrors.map((d) => `Disallow: /${d}/`).filter((l) => !txt.includes(l));
  if (disallows.length) {
    txt = txt.replace(/^Allow: \/$/m, (m) => `${m}\n${disallows.join('\n')}`);
    fs.writeFileSync(robots, txt);
  }
}

// GitHub Pages runs Jekyll unless told not to — _astro/ dirs need this
fs.writeFileSync(path.join(ROOT, '.nojekyll'), '');

// 6) commit (push is left to you)
run('git add -A', ROOT);
try {
  run(
    `git commit -m "Publish: ${rootDesign} at root, mirrors: ${mirrors.map((d) => '/' + d).join(' ')}"`,
    ROOT,
  );
} catch {
  console.log('> nothing new to commit');
}

console.log(`\n✔ Done. Site assembled at repo root:
   /      → ${rootDesign}
${mirrors.map((d) => `   /${d}    → ${d}`).join('\n')}
 Push to publish (GitHub Desktop → Push origin). Live in ~1–5 min.`);
