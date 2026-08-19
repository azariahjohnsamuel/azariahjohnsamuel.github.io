import { rm } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')

// Only remove known build-output paths at the repo root. Never touches
// /assets (static files) or /source (this project).
const targets = ['index.html', 'app']

for (const target of targets) {
  await rm(path.join(repoRoot, target), { recursive: true, force: true })
}
