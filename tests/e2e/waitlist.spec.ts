import { expect, test } from '@playwright/test';

test.describe('LeanBulk landing', () => {
  test('shows the offer and the waitlist form in the first viewport', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Masse.');
    const form = page.locator('#warteliste-oben');
    await expect(form.getByRole('textbox', { name: 'E-Mail-Adresse' })).toBeInViewport();
    await expect(form.getByRole('button', { name: /Auf die Warteliste/ })).toBeVisible();
  });

  test('rejects an incomplete email address', async ({ page }) => {
    await page.goto('/');
    const form = page.locator('#warteliste-oben');
    await form.getByRole('textbox', { name: 'E-Mail-Adresse' }).fill('kein-at-zeichen');
    await form.getByRole('button', { name: /Auf die Warteliste/ }).click();
    await expect(form.getByText(/sieht nicht vollständig aus/)).toBeVisible();
  });

  test('accepts a valid email address', async ({ page }) => {
    await page.goto('/?ref=e2e');
    const form = page.locator('#warteliste-oben');
    await form.getByRole('textbox', { name: 'E-Mail-Adresse' }).fill(`e2e-${Date.now()}@example.com`);
    await form.getByRole('button', { name: /Auf die Warteliste/ }).click();
    await expect(page.getByRole('status').first()).toContainText('Liste');
  });

  test('keeps the calorie goal fixed when a workout is logged', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Workout eintragen' }).click();
    await expect(page.getByText('Dein Kalorienziel: weiter 3.050.')).toBeVisible();
  });

  test('legal pages are reachable', async ({ page }) => {
    for (const path of ['/impressum', '/datenschutz']) {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    }
  });
});
