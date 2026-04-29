#!/usr/bin/env node
/**
 * detect-conventions.mjs
 *
 * プロジェクトの Storybook 設定・既存 Story ファイルを走査して
 * 規約（バージョン・フレームワーク・ファイル拡張子・title 命名）を検出し
 * 標準出力に JSON で出力する。
 *
 * 使い方:
 *   node scripts/detect-conventions.mjs [projectRoot]
 *
 * 出力例:
 *   {
 *     "storybookVersion": 8,
 *     "framework": "react",
 *     "storyExtension": ".stories.tsx",
 *     "titlePrefix": "Components",
 *     "hasAutodocs": true,
 *     "existingStoryExample": "src/components/Button/Button.stories.tsx"
 *   }
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { resolve, join } from 'path';

const projectRoot = process.argv[2]
  ? resolve(process.argv[2])
  : process.cwd();

const result = {
  storybookVersion: null,
  framework: null,
  storyExtension: null,
  titlePrefix: null,
  hasAutodocs: false,
  existingStoryExample: null,
};

// ── 1. package.json から Storybook バージョンとフレームワークを検出 ──────────
const pkgPath = join(projectRoot, 'package.json');
if (existsSync(pkgPath)) {
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };

  // バージョン検出
  const sbCore = deps['@storybook/core'] || deps['storybook'];
  if (sbCore) {
    const match = sbCore.match(/(\d+)/);
    if (match) result.storybookVersion = parseInt(match[1], 10);
  }

  // フレームワーク検出
  if (deps['@storybook/react'] || deps['@storybook/nextjs'] || deps['@storybook/react-vite']) {
    result.framework = 'react';
  } else if (deps['@storybook/vue3']) {
    result.framework = 'vue3';
  } else if (deps['@storybook/svelte']) {
    result.framework = 'svelte';
  } else if (deps['@storybook/angular']) {
    result.framework = 'angular';
  }
}

// ── 2. 既存 Story ファイルを探して拡張子・title・autodocs を検出 ────────────
function findStoryFiles(dir, depth = 0) {
  if (depth > 4) return [];
  const entries = readdirSync(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    if (['node_modules', '.git', 'dist', 'build', '.next'].includes(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findStoryFiles(full, depth + 1));
    } else if (/\.stories\.(tsx?|jsx?|svelte)$/.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

const storyFiles = findStoryFiles(projectRoot);

if (storyFiles.length > 0) {
  result.existingStoryExample = storyFiles[0].replace(projectRoot + '/', '');
  result.storyExtension = '.' + storyFiles[0].split('.').slice(-2).join('.');

  // 最初のファイルを読んで title・autodocs を確認
  const src = readFileSync(storyFiles[0], 'utf8');
  const titleMatch = src.match(/title:\s*['"`]([^'"` /]+)/);
  if (titleMatch) result.titlePrefix = titleMatch[1];

  result.hasAutodocs = src.includes("'autodocs'") || src.includes('"autodocs"');
}

// ── 3. .storybook/main.* から framework を補完 ────────────────────────────────
const sbMainCandidates = [
  join(projectRoot, '.storybook', 'main.ts'),
  join(projectRoot, '.storybook', 'main.js'),
  join(projectRoot, '.storybook', 'main.mjs'),
];
for (const candidate of sbMainCandidates) {
  if (existsSync(candidate)) {
    const src = readFileSync(candidate, 'utf8');
    if (!result.framework) {
      if (src.includes('@storybook/nextjs')) result.framework = 'react';
      else if (src.includes('@storybook/react')) result.framework = 'react';
      else if (src.includes('@storybook/vue3')) result.framework = 'vue3';
      else if (src.includes('@storybook/svelte')) result.framework = 'svelte';
    }
    break;
  }
}

// ── 出力 ─────────────────────────────────────────────────────────────────────
console.log(JSON.stringify(result, null, 2));
