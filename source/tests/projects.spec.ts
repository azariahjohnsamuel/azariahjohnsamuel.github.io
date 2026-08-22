import { test, expect } from '@playwright/test'
import { projects } from '../src/data/portfolio'

test.describe('projects section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.locator('#projects').scrollIntoViewIfNeeded()
  })

  test('renders one card per project', async ({ page }) => {
    await expect(page.locator('#projects .project')).toHaveCount(projects.length)
  })

  test('every card shows a title and its skill list', async ({ page }) => {
    const cards = page.locator('#projects .project')
    for (let i = 0; i < projects.length; i++) {
      const card = cards.nth(i)
      await expect(card.locator('.project-title')).toHaveText(projects[i].title)
      await expect(card.locator('.skills')).toHaveText(projects[i].skills)
    }
  })

  test('only projects with a logo render a logo image', async ({ page }) => {
    const withLogo = projects.filter((p) => p.logo)
    await expect(page.locator('#projects .logo-badge img')).toHaveCount(withLogo.length)
  })
})
