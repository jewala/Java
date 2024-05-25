
import { test, expect } from '@playwright/test';
const { test, expect } = require('@playwright/test');

// @ts-check
test('title check', async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/index.html");
    await expect(page).toHaveTitle("Page title");
});

test('alarm button check', async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/index.html");
    page.getByTestId("test-button").click;
    page.getByText("OK");
});