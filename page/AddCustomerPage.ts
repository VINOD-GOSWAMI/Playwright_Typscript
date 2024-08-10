import { Locator, Page } from "@playwright/test";
export default class AddCustomer {
    private firstNameInputField: Locator;
    private lastNameInputField: Locator;
    private postCodeInputField: Locator;
    private addCustomerButton: Locator;
    private page: Page;
    constructor(page: Page) {
        this.page = page;
        this.firstNameInputField = this.page.getByPlaceholder('First Name');
        this.lastNameInputField = this.page.getByPlaceholder('Last Name');
        this.postCodeInputField = this.page.getByPlaceholder('Post Code');
        this.addCustomerButton = this.page.getByRole('form').getByRole('button', { name: 'Add Customer' });
    }
    async addFirstName(firstName: string) {
        await this.firstNameInputField.fill(firstName);
    }

    async addLastName(lastName: string) {
        await this.lastNameInputField.fill(lastName);
    }

    async addPostCode(postCode: Number) {
        await this.postCodeInputField.fill(postCode.toString());
    }

    async clickOnAddCustomer() {
        await this.addCustomerButton.click();
    }

    async addCustomer(firstName: string, lastName: string, postCode: Number) {
        await this.addFirstName(firstName);
        await this.addLastName(lastName);
        await this.addPostCode(postCode);
        await this.clickOnAddCustomer();
    }
}