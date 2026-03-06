import { expect, test } from '@playwright/test';
import { profile } from '../../src/content';
import { MarketingSitePage } from './pages/marketing-site';

test.describe('Homepage', () => {
  test('loads and renders the hero ribbon', async ({ page }) => {
    const site = new MarketingSitePage(page);

    await site.goto('/');

    await expect(page.getByRole('heading', { level: 1 })).toContainText(profile.headline);
    await expect(site.heroRibbon).toBeVisible();
  });
});
