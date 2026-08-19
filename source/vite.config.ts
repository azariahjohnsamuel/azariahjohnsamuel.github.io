import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import sirv from 'sirv'
import type { Plugin } from 'vite'

const repoRoot = path.resolve(__dirname, '..')

// The repo root already holds /assets (images, resume PDFs, logos) at the
// exact path production needs. In dev, serve that folder under /assets too
// instead of relying on Vite's publicDir copy (which would flatten it).
function serveRepoAssets(): Plugin {
  return {
    name: 'serve-repo-assets',
    configureServer(server) {
      const serve = sirv(path.join(repoRoot, 'assets'), { dev: true })
      server.middlewares.use('/assets', serve)
    },
  }
}

export default defineConfig({
  // /assets/* paths point at the repo-root assets folder (served via the
  // middleware below in dev; already in place at build time). They are
  // plain runtime URLs, not bundled modules, so template asset-url
  // rewriting must stay off.
  plugins: [vue({ template: { transformAssetUrls: false } }), serveRepoAssets()],
  publicDir: false,
  build: {
    outDir: repoRoot,
    emptyOutDir: false,
    assetsDir: 'app',
  },
})
