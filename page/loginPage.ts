import { Page } from "@playwright/test";
import ManagerHomePage from "./ManagerHomePage";
export default class LoginPage {
    private customerLoginButton = "getByRole('button', { name: 'Customer Login' })";
    private bankManagerLoginButton = 'button:has-text("Bank Manager Login")';
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goTo() {
        await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    }

    async clickOnCustomerLoginButton() {
        await this.page.click(this.customerLoginButton)
    }

    async clickOnBankManagerLoginButton() {
        await this.page.locator(this.bankManagerLoginButton).click();
        return new ManagerHomePage(this.page);
    }
}