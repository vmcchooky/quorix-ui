import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';

const expectedFiles = [
  'dist/quorix.min.css',
  'dist/quorix.min.js',
  'dist/quorix.esm.js',
  'dist/quorix.cjs',
  'dist/quorix.d.ts'
];

for (const file of expectedFiles) {
  assert.ok(existsSync(file), `Missing build artifact: ${file}`);
}

const esm = await import('../dist/quorix.esm.js');
assert.equal(typeof esm.Quorix, 'function', 'ESM named export Quorix must be available');
assert.equal(typeof esm.default, 'function', 'ESM default export must be available');
assert.equal(typeof esm.Quorix.toast, 'function', 'ESM Quorix.toast must be available');

const require = createRequire(import.meta.url);
const cjs = require('../dist/quorix.cjs');
assert.equal(typeof cjs.Quorix, 'function', 'CJS named export Quorix must be available');
assert.equal(typeof cjs.default, 'function', 'CJS default export must be available');
assert.equal(typeof cjs.Quorix.toast, 'function', 'CJS Quorix.toast must be available');

console.log('Package smoke check passed.');
