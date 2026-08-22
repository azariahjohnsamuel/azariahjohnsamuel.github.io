import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
  projects: [
    { name: 'Desktop Chrome', use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 900 } } },
    // Android presets so tablet/mobile checks run on the already-installed
    // Chromium engine instead of requiring a separate WebKit download.
    { name: 'Tablet', use: { ...devices['Galaxy Tab S4'] } },
    { name: 'Mobile', use: { ...devices['Pixel 7'] } },
  ],
})
