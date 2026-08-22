import { test, expect } from '@playwright/test'
import { experience } from '../src/data/portfolio'

test.describe('experience section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.locator('#experience').scrollIntoViewIfNeeded()
  })

  test('renders one row per experience entry', async ({ page }) => {
    await expect(page.locator('#experience .entry-row')).toHaveCount(experience.length)
  })

  test('every entry shows its role, company and date range', async ({ page }) => {
    const rows = page.locator('#experience .entry-row')
    for (let i = 0; i < experience.length; i++) {
      const row = rows.nth(i)
      await expect(row.locator('.role')).toHaveText(experience[i].title)
      await expect(row.locator('.company')).toContainText(experience[i].company)
    }
  })

  test('exactly one entry (the current role) has a pulsing node', async ({ page }) => {
    const currentCount = experience.filter((e) => !e.end).length
    await expect(page.locator('#experience .node.current')).toHaveCount(currentCount)
  })

  test('the connecting rail line runs between every node but the last', async ({ page }) => {
    const rails = page.locator('#experience .rail')
    await expect(rails).toHaveCount(experience.length)
  })
})
