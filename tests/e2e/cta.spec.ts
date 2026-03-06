import { expect, test } from '@playwright/test';
import { MarketingSitePage } from './pages/marketing-site';

test.describe('CTA flows', () => {
  test('routes the main marketing CTAs to the expected pages', async ({ page }) => {
    const site = new MarketingSitePage(page);

    await site.goto('/');

    await site.heroPrimaryCta.click();
    await expect(page).toHaveURL('/contact');

    await site.navigate('Home');
    await site.heroSecondaryCta.click();
    await expect(page).toHaveURL('/services');

    await site.servicesPrimaryCta.scrollIntoViewIfNeeded();
    await site.servicesPrimaryCta.click();
    await expect(page).toHaveURL('/contact');

    await site.navigate('Home');
    await site.homeFinalCta.scrollIntoViewIfNeeded();
    await site.homeFinalCta.click();
    await expect(page).toHaveURL('/contact');
  });
});
