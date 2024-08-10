import { Locator, Page } from "@playwright/test";

export default class OpenAccount {
   private page: Page;
   private customerNameDropdown: Locator;
   private currencyDropdown: Locator;
   private processButton: Locator;
   constructor(page: Page) {
      this.page = page
      this.customerNameDropdown = this.page.locator('#userSelect');
      this.currencyDropdown = this.page.locator('#currency');
      this.processButton = this.page.getByRole("button", { name: "Process" });
   }

   async selectCustomerName(customerName: string) {
      await this.customerNameDropdown.selectOption(customerName);
   }

   async selectCurrency(currency: string) {
      await this.currencyDropdown.selectOption({ label: currency });
   }

   async clickOnProcessButton() {
      await this.processButton.click();
   }


   async openAccount(customerName: string, currency: string) {
      await this.selectCustomerName(customerName);
      await this.selectCurrency(currency)
      await this.clickOnProcessButton();
   }
}