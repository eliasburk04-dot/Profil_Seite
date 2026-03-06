import { expect, test } from '@playwright/test';
import {
  aboutContent,
  appsContent,
  contactContent,
  projectsContent,
  servicesContent,
} from '../../src/content';
import { MarketingSitePage } from './pages/marketing-site';

test.describe('Main navigation', () => {
  test('navigates across the primary pages', async ({ page }) => {
    const site = new MarketingSitePage(page);

    await site.goto('/');

    const routes = [
      { label: 'Über uns', path: '/about', heading: aboutContent.subtitle },
      { label: 'Leistungen', path: '/services', heading: servicesContent.description },
      { label: 'Projekte', path: '/projects', heading: projectsContent.description },
      { label: 'Kontakt', path: '/contact', heading: contactContent.description },
      { label: 'Apps', path: '/apps', heading: appsContent.description },
      { label: 'Home', path: '/', heading: /Wir bauen digitale Auftritte/i },
    ] as const;

    for (const route of routes) {
      await site.navigate(route.label);
      await expect(page).toHaveURL(route.path);
      await expect(page.getByRole('heading', { level: 1 })).toContainText(route.heading);
    }
  });
});
