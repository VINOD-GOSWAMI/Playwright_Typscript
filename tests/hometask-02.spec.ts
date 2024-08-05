import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ultimateqa.com/');
  await page.locator('#menu-item-217940').getByRole('link', { name: 'About' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.url()).toContain('/about/');
  await page.getByRole('link', { name: 'Contact Us' }).scrollIntoViewIfNeeded();
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.url()).toContain('/contact/');
  await page.getByPlaceholder('Name').fill('Vinodpuri Goswami');
  await page.getByPlaceholder('Your Email Address').fill('vinodpurigoswami@gmail.com');
  await page.getByPlaceholder('Message').fill('Learning Playwright with typescript and javascript');
  await page.getByRole('button', { name: 'Submit 9' }).click();
  if (page.getByText('You must be a human to submit this form.').isVisible(),2000){
  await expect(page.getByText('You must be a human to submit this form.')).toContainText('You must be a human to submit this form.');
  await page.getByRole('button', { name: 'Submit 9' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Submit 9' }).click();
  }
  await expect(page.getByText('Thank you for contacting us')).toContainText('Thank you for contacting us');
});