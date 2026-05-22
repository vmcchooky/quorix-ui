import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'));
const readText = (path) => readFileSync(path, 'utf8');

const pkg = readJson('package.json');
assert.equal(pkg.main, 'dist/quorix.cjs', 'package main must point to the CJS artifact');
assert.equal(pkg.types, 'dist/quorix.d.ts', 'package types must point to generated declarations');
assert.equal(pkg.exports['.'].require, './dist/quorix.cjs', 'exports.require must point to CJS');
assert.equal(pkg.exports['.'].types, './dist/quorix.d.ts', 'exports.types must point to declarations');

for (const file of pkg.files) {
  assert.ok(existsSync(file), `Published file entry does not exist: ${file}`);
}

const sourceFiles = [
  'README.md',
  'README.vi.md',
  'docs/visualization.html',
  'js/quorix.ts',
  'css/animations.css',
  'css/ai-search.css',
  'css/article-extensions.css',
  'css/components.css',
  'css/colors.css',
  'css/editorial.css',
  'css/forms.css',
  'css/icons.css',
  'css/layout.css',
  'css/metrics.css',
  'css/primitives.css',
  'css/reset.css',
  'css/typography.css',
  'css/utilities.css'
];

for (const file of sourceFiles) {
  const text = readText(file);
  assert.ok(!text.includes('2.1.5'), `${file} still references version 2.1.5`);
  assert.ok(!text.includes('WCAG 2.1 AA Compliant'), `${file} uses an unverified compliance claim`);
  assert.ok(!text.includes('strictly adhere'), `${file} uses an unverified compliance claim`);
  assert.ok(!text.includes('tuân thủ khắt khe'), `${file} uses an unverified compliance claim`);
}

const docs = readText('docs/visualization.html');
assert.match(docs, /role="tablist"/, 'Demo tabs must expose role="tablist"');
assert.match(docs, /role="tab"/, 'Demo tabs must expose role="tab"');
assert.match(docs, /role="tabpanel"/, 'Demo panels must expose role="tabpanel"');
assert.match(docs, /aria-selected="true"/, 'Demo tabs must expose aria-selected state');

const core = readText('js/quorix.ts');
assert.match(core, /ArrowRight/, 'Tabs must support arrow-key navigation');
assert.match(core, /aria-selected/, 'Tabs must update aria-selected');
assert.match(core, /aria-controls/, 'Tabs must link tabs to panels');
assert.match(core, /toggleAttribute\('hidden'/, 'Tabs must keep hidden state in sync');

console.log('Quality check passed.');
