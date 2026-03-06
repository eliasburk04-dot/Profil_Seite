import type { Locator, Page } from '@playwright/test';

export class MarketingSitePage {
  readonly page: Page;
  readonly heroPrimaryCta: Locator;
  readonly heroSecondaryCta: Locator;
  readonly homeFinalCta: Locator;
  readonly servicesPrimaryCta: Locator;
  readonly contactSubmit: Locator;
  readonly contactSuccess: Locator;
  readonly heroRibbon: Locator;
  readonly mobileNavTrigger: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heroPrimaryCta = page.getByTestId('hero-primary-cta');
    this.heroSecondaryCta = page.getByTestId('hero-secondary-cta');
    this.homeFinalCta = page.getByTestId('home-final-cta');
    this.servicesPrimaryCta = page.getByTestId('services-primary-cta');
    this.contactSubmit = page.getByTestId('contact-submit');
    this.contactSuccess = page.getByTestId('contact-success');
    this.heroRibbon = page.getByTestId('hero-ribbon').first();
    this.mobileNavTrigger = page.getByTestId('mobile-nav-trigger');
  }

  async goto(path = '/') {
    await this.page.goto(path);
  }

  async navigate(label: string) {
    await this.page.locator('[aria-label="Navigation"]').getByRole('link', { name: label }).click();
  }
}
