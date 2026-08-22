import { test, expect } from '@playwright/test'

const sections = ['experience', 'projects', 'skills', 'education']

test.describe('navigation', () => {
  test('desktop nav links scroll to their sections', async ({ page, isMobile }) => {
    test.skip(isMobile, 'desktop-only nav bar')
    await page.goto('/')

    for (const id of sections) {
      await page.locator('.links a', { hasText: new RegExp(id, 'i') }).click()
      // Smooth-scrolling to the anchor, then the section's own scroll-driven
      // zoom transition, both need time to settle before its position is stable.
      await page.waitForTimeout(900)
      // Not a fixed pixel offset: the last section can't always scroll flush
      // to the top if the page ends shortly after it. Just confirm it's on screen.
      await expect(page.locator(`#${id}`)).toBeInViewport()
    }
  })

  test('mobile menu opens, links work, and closes after navigating', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'mobile-only menu')
    await page.goto('/')

    const toggle = page.locator('.menu-toggle')
    await expect(toggle).toBeVisible()
    await toggle.click()
    await expect(page.locator('.mobile-links')).toBeVisible()

    await page.locator('.mobile-links a', { hasText: /experience/i }).click()
    await page.waitForTimeout(400)
    await expect(page.locator('.mobile-links')).not.toBeVisible()

    const box = await page.locator('#experience').boundingBox()
    expect(box).not.toBeNull()
  })

  test('active nav link updates as you scroll', async ({ page, isMobile }) => {
    test.skip(isMobile, 'scrollspy only affects desktop nav')
    await page.goto('/')

    await page.locator('#skills').scrollIntoViewIfNeeded()
    await page.waitForTimeout(600)
    await expect(page.locator('.links a.active')).toHaveText(/skills/i)
  })
})
