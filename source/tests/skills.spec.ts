import { test, expect } from '@playwright/test'
import { skillGroups } from '../src/data/portfolio'

test.describe('skills section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.locator('#skills').scrollIntoViewIfNeeded()
    // #skills has a scroll-driven zoom/opacity transition (v-zoom-section);
    // let it settle before measuring positions or hovering, or the element
    // can still be moving when the pointer event lands.
    await page.waitForTimeout(400)
  })

  test('renders one group per category with every chip', async ({ page }) => {
    await expect(page.locator('#skills .group')).toHaveCount(skillGroups.length)

    for (const group of skillGroups) {
      const groupEl = page.locator('#skills .group', { has: page.getByText(group.category, { exact: true }) })
      await expect(groupEl.locator('.skill-chip')).toHaveCount(group.items.length)
    }
  })

  test('every chip has an icon (brand mark or monogram fallback)', async ({ page }) => {
    const totalChips = skillGroups.reduce((sum, g) => sum + g.items.length, 0)
    const chips = page.locator('#skills .skill-chip')
    await expect(chips).toHaveCount(totalChips)

    const withoutIcon = await chips.evaluateAll((els) =>
      els.filter((el) => !el.querySelector('svg.icon') && !el.querySelector('.monogram')).length,
    )
    expect(withoutIcon).toBe(0)
  })

  test('hovering a chip with a known brand reveals its brand color', async ({ page, isMobile }) => {
    test.skip(isMobile, 'touch devices do not have a persistent :hover state')
    const vueChip = page.locator('.skill-chip', { hasText: 'Vue.js' }).first()
    const before = await vueChip.locator('.icon').evaluate((el) => getComputedStyle(el).fill)
    await vueChip.hover()
    await page.waitForTimeout(600)
    const after = await vueChip.locator('.icon').evaluate((el) => getComputedStyle(el).fill)
    expect(after).not.toBe(before)
  })
})
