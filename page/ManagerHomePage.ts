import { Page } from 'playwright';
import AddCustomer from './AddCustomerPage';
import OpenAccount from './OpenAccountPage';
import Customers from './Customers';
import LoginPage from './loginPage';
import { Locator } from '@playwright/test';

export default class ManagerHomePage {
  private page: Page;
  private addCustomerButton = "button:has-text('Add Customer')"
  private openAccountButton: Locator;
  private customersButton: Locator;
  private homePageButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.openAccountButton = this.page.getByRole('button', { name: 'Open Account' });
    this.customersButton = this.page.getByRole('button', { name: 'Customers' });
    this.homePageButton = this.page.getByRole('button', { name: 'Home' });
  }

  async clickOnAddCustomerButton() {
    await this.page.click(this.addCustomerButton);
    return new AddCustomer(this.page);
  }

  async clickOnOpenAccountButton() {
    await this.openAccountButton.click();
    return new OpenAccount(this.page);
  }

  async clickOnCustomersButton() {
    await this.customersButton.click();
    return new Customers(this.page);
  }


  async clickOnHomeButton() {
    await this.homePageButton.click();
    return new LoginPage(this.page);
  }
}
