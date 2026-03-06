import { expect, test } from '@playwright/test';
import { MarketingSitePage } from './pages/marketing-site';

test.describe('Contact form', () => {
  test('validates a submission path and prepares the email draft state', async ({ page }) => {
    const site = new MarketingSitePage(page);

    await site.goto('/contact');

    await page.getByLabel('Name *').fill('Max Mustermann');
    await page.getByLabel('E-Mail *').fill('max@example.com');
    await page.getByLabel('Unternehmen').fill('Muster GmbH');
    await page.getByLabel('Budget-Rahmen').selectOption('3.000 – 10.000 €');
    await page.getByLabel('Betreff *').fill('Neue Website für unser Unternehmen');
    await page
      .getByLabel('Nachricht *')
      .fill(
        'Wir möchten unseren Auftritt neu strukturieren und suchen einen verlässlichen Partner für Konzept und Umsetzung.'
      );

    await site.contactSubmit.click();

    await expect(site.contactSuccess).toBeVisible();
    await expect(page.getByRole('link', { name: 'E-Mail-Entwurf öffnen' })).toHaveAttribute(
      'href',
      /mailto:/
    );
  });
});
