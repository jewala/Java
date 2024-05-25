const { test, expect } = require('@playwright/test');


test('title check', async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/index.html");
    await expect(page).toHaveTitle("Page title");
});