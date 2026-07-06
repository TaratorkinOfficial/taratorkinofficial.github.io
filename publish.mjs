#!/usr/bin/env node
/**
 * Builds the site into docs/ — GitHub Pages serves that folder
 * (Settings → Pages → Deploy from a branch → main → /docs).
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

const ROOT = path.dirname(fileURLToPath(import.meta.url)); // the repo itself
const DOCS = path.join(ROOT, 'docs');
const LEGACY_TAG = 'legacy-site';
const CF_TOKEN = '4f0e8def1e514737a965ca85fcda51ab';
const PROJECTS = {
  v1: path.join(ROOT, 'sources', 'v1'),
  v2: path.join(ROOT, 'sources', 'v2'),
  v3: path.join(ROOT, 'sources', 'v3'),
};

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

// 2) reset docs/
console.log('\n> resetting docs/');
fs.rmSync(DOCS, { recursive: true, force: true });
fs.mkdirSync(DOCS, { recursive: true });

// 3) root content
if (rootDesign === 'legacy') {
  console.log(`> extracting legacy site (${LEGACY_TAG}) → docs/`);
  const tarPath = path.join(ROOT, 'legacy-tmp.tar');
  run(`git archive --format=tar -o "${tarPath}" ${LEGACY_TAG}`, ROOT);
  run(`tar -xf "${tarPath}" -C "${DOCS}"`, ROOT);
  fs.rmSync(tarPath, { force: true });

  // the legacy HTML predates the analytics beacon — inject it
  const BEACON =
    `<script defer src='https://static.cloudflareinsights.com/beacon.min.js' ` +
    `data-cf-beacon='{"token": "${CF_TOKEN}"}'></script>`;
  for (const f of fs.readdirSync(DOCS).filter((n) => n.endsWith('.html'))) {
    const p = path.join(DOCS, f);
    let html = fs.readFileSync(p, 'utf8');
    if (!html.includes('cloudflareinsights') && html.includes('</head>')) {
      html = html.replace('</head>', `${BEACON}\n</head>`);
      fs.writeFileSync(p, html);
    }
  }
  console.log('> beacon injected into legacy pages');
} else {
  console.log(`> copying ${rootDesign} → docs/`);
  copyDir(path.join(PROJECTS[rootDesign], 'dist'), DOCS);
}

// 4) mirrors
for (const d of mirrors) {
  console.log(`> copying ${d} → docs/${d}`);
  copyDir(path.join(PROJECTS[d], 'dist'), path.join(DOCS, d));
}

// 5) keep the mirrors out of search results
const robots = path.join(DOCS, 'robots.txt');
if (fs.existsSync(robots)) {
  let txt = fs.readFileSync(robots, 'utf8');
  const disallows = mirrors.map((d) => `Disallow: /${d}/`).filter((l) => !txt.includes(l));
  if (disallows.length) {
    txt = txt.replace(/^Allow: \/$/m, (m) => `${m}\n${disallows.join('\n')}`);
    fs.writeFileSync(robots, txt);
  }
}

// GitHub Pages runs Jekyll unless told not to — _astro/ dirs need this
if (!fs.existsSync(path.join(DOCS, '.nojekyll'))) {
  fs.writeFileSync(path.join(DOCS, '.nojekyll'), '');
}

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

console.log(`\n✔ Done. docs/ assembled:
   /      → ${rootDesign}
${mirrors.map((d) => `   /${d}    → ${d}`).join('\n')}
 Push to publish (GitHub Desktop → Push origin). Live in ~1–5 min.`);
