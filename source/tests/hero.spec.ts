import { test, expect } from '@playwright/test'
import { profile } from '../src/data/portfolio'

test.describe('hero', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('shows name, title and tagline', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText(profile.displayName)
    await expect(page.getByText(profile.title, { exact: false }).first()).toBeVisible()
    await expect(page.getByText(profile.tagline, { exact: false }).first()).toBeVisible()
  })

  test('shows the profile summary', async ({ page }) => {
    await expect(page.getByText(profile.summary.slice(0, 40), { exact: false })).toBeVisible()
  })

  test('contact links point at the right targets', async ({ page }) => {
    const hero = page.locator('.hero-inner')
    await expect(hero.locator(`a[href="mailto:${profile.email}"]`)).toBeVisible()
    await expect(hero.locator(`a[href="${profile.linkedin}"]`)).toBeVisible()
    await expect(hero.locator(`a[href="${profile.github}"]`)).toBeVisible()

    const resumeLink = hero.locator(`a[href="${profile.resumeUrl}"]`)
    await expect(resumeLink).toBeVisible()
    await expect(resumeLink).toHaveAttribute('target', '_blank')
  })

  test('resume link resolves to a real PDF', async ({ request }) => {
    const res = await request.get(profile.resumeUrl)
    expect(res.status()).toBe(200)
    expect(res.headers()['content-type']).toContain('pdf')
  })

  test('typewriter line renders some text and keeps changing', async ({ page }) => {
    const typewriter = page.locator('.typewriter')
    await expect(typewriter).toBeVisible()
    const first = await typewriter.innerText()
    await page.waitForTimeout(2000)
    const second = await typewriter.innerText()
    expect(first !== second || first.length > 0).toBeTruthy()
  })

  test('title text contains no em dashes', async ({ page }) => {
    const bodyText = await page.locator('body').innerText()
    expect(bodyText).not.toContain('—')
  })
})
