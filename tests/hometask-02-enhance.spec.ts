import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const submitButton=page.locator("//span[text()='Send us a Message']/ancestor::div//button[text()='Submit']");
  const messageElement=page.locator("//div[contains(@class,'contact-message')]/p");
  const nameInputField=page.locator("//span[text()='Send us a Message']/ancestor::div//form[contains(@class,'contact_form')]//input[@placeholder='Name']");
  const emailInputField=page.locator("//span[text()='Send us a Message']/ancestor::div//form[contains(@class,'contact_form')]//input[@placeholder='Your Email Address']");
  const messageTextField=page.locator("//span[text()='Send us a Message']/ancestor::div//form[contains(@class,'contact_form')]//textArea[@placeholder='Message']");
  await page.goto('https://ultimateqa.com/');
  await page.locator('#menu-main-menu').getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await nameInputField.fill('Vinodpuri Goswami');
  await emailInputField.fill('vinodpuri@gmail.com');
  await messageTextField.fill('learning playwright with typescript');
  await submitButton.click();
  await messageElement.waitFor({ state: 'visible', timeout: 5000 });
  const errorMessageLocator = messageElement.locator('text="You must be a human to submit this form."');
  const isErrorVisible = await errorMessageLocator.isVisible({ timeout: 2000 });
  if (isErrorVisible) {
    await submitButton.click();
    await page.waitForLoadState('networkidle');
    await submitButton.click();
  }
  await messageElement.waitFor({ state: 'visible', timeout: 5000 });
  await expect(messageElement).toContainText('Thank you for contacting us', { timeout: 5000 });
});