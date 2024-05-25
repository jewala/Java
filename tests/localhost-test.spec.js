const { test, expect } = require('@playwright/test');

let page = baseUrl;

test('title check', async ({ page }) => {
    await page.goto(baseUrl);
    await page.expect(baseUrl).toHaveTitle("Page title");
});