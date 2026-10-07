import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8')) as {
  version: string;
};

// CI (Cloudflare Pages) knows the deployed commit; locally fall back to git.
const commitSha = (() => {
  const fromCi = process.env.CF_PAGES_COMMIT_SHA ?? process.env.GITHUB_SHA ?? '';
  if (fromCi) return fromCi.slice(0, 7);

  try {
    return execSync('git rev-parse --short HEAD', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
  } catch {
    return 'unknown';
  }
})();

const buildDate = new Date().toISOString().slice(0, 10);

export default defineConfig({
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
    __APP_COMMIT__: JSON.stringify(commitSha),
    __APP_BUILD_DATE__: JSON.stringify(buildDate),
  },
  build: {
    // The Cloudflare Pages project is configured with output directory "build".
    outDir: 'build',
  },
});
