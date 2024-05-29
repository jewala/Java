import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');
  await expect(page.locator('#page-heading')).toContainText('This is a heading');
  await expect(page.locator('#test-paragraph')).toContainText('This is a paragraph.');
  await expect(page.locator('#test-button')).toContainText('This is an alert button.');
  await page.getByRole('button', { name: 'This is an alert button.' }).click();
});