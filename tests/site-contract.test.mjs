import test from 'node:test';
import assert from 'node:assert/strict';
const origin = process.env.SITE_TEST_URL ?? 'http://localhost:3107';
const routes = [
  '/',
  '/leanbulk/datenschutz',
  '/leanbulk/impressum',
  '/leanbulk/nutzung',
  '/leanbulk/quellen',
  '/leanbulk/support',
];
const pages = new Map();
async function page(path) {
  if (!pages.has(path))
    pages.set(
      path,
      fetch(origin + path).then(async (response) => {
        assert.equal(response.status, 200, path);
        assert.equal(response.headers.get('set-cookie'), null, path + ' sets no cookies');
        assert.match(
          response.headers.get('content-security-policy') ?? '',
          /frame-ancestors 'none'/
        );
        return response.text();
      })
    );
  return pages.get(path);
}
for (const route of routes) {
  test(`${route}: legal navigation and every internal link/fragment resolve`, async () => {
    const html = await page(route);
    assert.match(html, /<html lang="de"/);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
    assert.doesNotMatch(
      html,
      /Glow Era|EXPOSED|Kostenloses Erstgespräch|Websites entwickeln lassen/
    );
    for (const required of ['/leanbulk/datenschutz', '/leanbulk/impressum', '/leanbulk/support'])
      assert.ok(html.includes(`href="${required}"`), required);
    const hrefs = [...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((m) =>
      m[1].replaceAll('&amp;', '&')
    );
    for (const href of new Set(hrefs)) {
      if (/^(?:mailto:|https:)/.test(href)) continue;
      const target = new URL(href, origin + route);
      assert.equal(target.origin, origin);
      const targetHTML = await page(target.pathname);
      if (target.hash)
        assert.ok(
          targetHTML.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`),
          `${route} → ${href}`
        );
    }
  });
}
test('retired app pages are absent and previous own legal URLs redirect', async () => {
  for (const route of [
    '/apps/glow-era/datenschutz',
    '/apps/glow-era/impressum',
    '/apps',
    '/unknown',
  ]) {
    const response = await fetch(origin + route);
    assert.equal(response.status, 404, route);
  }
  for (const [from, to] of [
    ['/datenschutz', '/leanbulk/datenschutz'],
    ['/impressum', '/leanbulk/impressum'],
    ['/contact', '/leanbulk/support'],
  ]) {
    const response = await fetch(origin + from, { redirect: 'manual' });
    assert.equal(response.status, 308);
    assert.equal(response.headers.get('location'), to);
  }
});
test('no accidental third-party embeds, forms or fake App Store checkout', async () => {
  for (const route of routes) {
    const html = await page(route);
    assert.doesNotMatch(
      html,
      /<form\b|<iframe\b|google-analytics|googletagmanager|fonts\.googleapis|vercel\/analytics|action="https:/
    );
    for (const match of html.matchAll(/<(?:script|img|link)\b[^>]*(?:src|href)="([^"]+)"/g)) {
      // Canonical/alternate links are metadata and load nothing.
      if (/\brel="(?:canonical|alternate)"/.test(match[0])) continue;
      assert.ok(!/^https?:/.test(match[1]), `${route}: external embed ${match[1]}`);
    }
  }
});
test('screenshot assets, licenses and sitemap are served', async () => {
  for (const path of [
    '/screens/today.webp',
    '/screens/weight.webp',
    '/screens/training.webp',
    '/fonts/OFL.txt',
    '/licenses/exercises-MIT.txt',
    '/opengraph-image',
    '/sitemap.xml',
    '/robots.txt',
  ]) {
    const response = await fetch(origin + path);
    assert.equal(response.status, 200, path);
  }
});
