import { test, expect } from '@playwright/test';

test('Heading, paragraph, button', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');
  await expect(page.locator('#page-heading')).toContainText('About frogs');
  await expect(page.locator('#alert-button')).toContainText('This is an alert button.');
  await page.getByRole('button', { name: 'This is an alert button.' }).click();
});

test('input fields, alert button', async ({ page }) => {
  await expect(page.locator('#fname')).toBeEmpty;
  await expect(page.locator('#lname')).toBeEmpty;
  await expect(page.locator('#submit-button')).toBeVisible;
  await page.getByRole('button', { name: 'Submit information'}).click();
});

