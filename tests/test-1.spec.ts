import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.lansforsakringar.se/stockholm/privat/');
  await page.getByRole('button', { name: 'Tillåt alla' }).click();
  await page.getByRole('link', { name: 'Kundservice' }).click();
  await page.getByRole('link', { name: 'Till alla vanliga frågor och' }).click();
  await page.getByRole('link', { name: 'LF Stockholm' }).click();
  await page.getByRole('link', { name: 'Logga in', exact: true }).click();
});