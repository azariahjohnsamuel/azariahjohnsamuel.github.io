import { test, expect } from '@playwright/test'
import { education, profile } from '../src/data/portfolio'

test.describe('education section', () => {
  test('renders one card per qualification', async ({ page }) => {
    await page.goto('/')
    await page.locator('#education').scrollIntoViewIfNeeded()

    const cards = page.locator('#education .edu')
    await expect(cards).toHaveCount(education.length)

    for (let i = 0; i < education.length; i++) {
      await expect(cards.nth(i).locator('.degree')).toHaveText(education[i].title)
      await expect(cards.nth(i).locator('.institution')).toContainText(education[i].institution)
    }
  })
})

test.describe('footer', () => {
  test('shows contact links and current year', async ({ page }) => {
    await page.goto('/')
    const footer = page.locator('footer')
    await footer.scrollIntoViewIfNeeded()

    await expect(footer.locator(`a[href="mailto:${profile.email}"]`)).toBeVisible()
    await expect(footer.locator(`a[href="${profile.linkedin}"]`)).toBeVisible()
    await expect(footer.locator(`a[href="${profile.github}"]`)).toBeVisible()
    await expect(footer).toContainText(String(new Date().getFullYear()))
  })
})
