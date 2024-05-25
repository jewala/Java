const { test, expect } = require('@playwright/test');

let page = "http://127.0.0.1:5500/index.html";

test('title check', async ({ page }) => {
    await page.goto(page);
    await page.expect(page).toHaveTitle("Page title");
});