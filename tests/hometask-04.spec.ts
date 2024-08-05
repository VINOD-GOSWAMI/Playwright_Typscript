import { test, expect } from '@playwright/test';

test('Perform withdraw with zero Balance.', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  await page.getByRole('button', { name: 'Customer Login' }).click();
  await page.locator('#userSelect').selectOption('1');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Transactions' }).click();
  await page.getByRole('button', { name: 'Reset' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Withdrawl' }).click();
  await page.getByPlaceholder('amount').fill('1230');
  await page.getByRole('button', { name: 'Withdraw', exact: true }).click();
  await page.waitForSelector('text="Transaction Failed. You can not withdraw amount more than the balance."');
  const message = page.getByText('Transaction Failed. You can');
  await expect(message).toContainText('Transaction Failed. You can not withdraw amount more than the balance.');
});


test('Add deposit to the account', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  await page.getByRole('button', { name: 'Customer Login' }).click();
  await page.locator('#userSelect').selectOption('3');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Deposit' }).click();
  await page.getByPlaceholder('amount').click();
  const value='20000';
  await page.getByPlaceholder('amount').fill(value);
  await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();
  await expect(page.locator("//div[contains(text(),'Account Number')]//strong[2]")).toHaveText(value);
});