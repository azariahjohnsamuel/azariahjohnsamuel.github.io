import { test, expect } from '@playwright/test'

test.describe('smoke', () => {
  test('loads with no console errors and no failed requests', async ({ page }) => {
    const consoleErrors: string[] = []
    const failedRequests: string[] = []

    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })
    page.on('pageerror', (err) => consoleErrors.push(err.message))
    page.on('response', (res) => {
      if (res.status() >= 400) failedRequests.push(`${res.status()} ${res.url()}`)
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    expect(consoleErrors, `console errors:\n${consoleErrors.join('\n')}`).toEqual([])
    expect(failedRequests, `failed requests:\n${failedRequests.join('\n')}`).toEqual([])
  })

  test('has no horizontal overflow', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const overflow = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }))

    expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1)
  })

  test('every image loads successfully', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const broken = await page.evaluate(() =>
      Array.from(document.images)
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.src),
    )

    expect(broken, `broken images:\n${broken.join('\n')}`).toEqual([])
  })
})
