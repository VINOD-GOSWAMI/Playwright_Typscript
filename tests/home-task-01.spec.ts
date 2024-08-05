import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('Playwright');
  await page.keyboard.press("Enter");
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  await expect(page.locator('h1')).toContainText('Playwright');
});