import { expect, test } from '@playwright/test';
import { contactContent } from '../../src/content';
import { MarketingSitePage } from './pages/marketing-site';

test.describe('Mobile navigation', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('opens the drawer and navigates to contact', async ({ page }) => {
    const site = new MarketingSitePage(page);

    await site.goto('/');

    await expect(site.mobileNavTrigger).toBeVisible();
    await site.mobileNavTrigger.click();

    await page.getByRole('link', { name: 'Kontakt' }).click();
    await expect(page).toHaveURL('/contact');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(contactContent.description);
  });
});
