import { test, expect } from '@playwright/test'

test.describe('scroll progress bar', () => {
  test('fill width grows as the page scrolls', async ({ page }) => {
    await page.goto('/')
    const fill = page.locator('.progress-fill')

    const widthAtTop = await fill.evaluate((el) => parseFloat(getComputedStyle(el).width))
    await page.locator('#education').scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)
    const widthNearBottom = await fill.evaluate((el) => parseFloat(getComputedStyle(el).width))

    expect(widthNearBottom).toBeGreaterThan(widthAtTop)
  })
})

test.describe('back to top', () => {
  test('appears after scrolling and returns to the top on click', async ({ page }) => {
    await page.goto('/')
    const button = page.locator('.back-to-top')
    await expect(button).toHaveCount(0)

    await page.locator('#education').scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)
    await expect(button).toBeVisible()

    await button.click()
    await page.waitForFunction(() => window.scrollY < 50, { timeout: 3000 })
  })
})

test.describe('cursor sparkles', () => {
  test('spawn while moving and clean themselves up afterwards', async ({ page, isMobile }) => {
    test.skip(isMobile, 'sparkle trail only binds on hover-capable pointers')
    await page.goto('/')

    for (let i = 0; i < 10; i++) {
      await page.mouse.move(200 + i * 20, 300 + i * 5, { steps: 2 })
      await page.waitForTimeout(20)
    }
    const duringCount = await page.locator('.sparkle').count()
    expect(duringCount).toBeGreaterThan(0)

    await page.waitForTimeout(1500)
    const afterCount = await page.locator('.sparkle').count()
    expect(afterCount).toBe(0)
  })
})

test.describe('reduced motion', () => {
  test.use({ reducedMotion: 'reduce' })

  test('sections and reveal content are visible immediately, no stuck animations', async ({ page }) => {
    await page.goto('/')
    // No waitForTimeout for reveal transitions here on purpose: with reduced
    // motion the CSS should show content immediately, not after a delay.
    await expect(page.locator('#experience .entry-row').first()).toBeVisible()
    await expect(page.locator('#projects .project').first()).toBeVisible()
  })
})
