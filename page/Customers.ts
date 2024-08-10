import { expect, Locator, Page } from "@playwright/test";

export default class Customers {
    private page: Page;
    private searchInputField: Locator;

    constructor(page: Page) {
        this.page = page
        this.searchInputField = this.page.locator('input[placeholder="Search Customer"]');
    }

    async searchValue(value: string) {
        await this.searchInputField.fill(value);
    }

    async verifyCustomerDataExist(customerData: { firstName: string; lastName: string; postcode: number; }) {
        await expect(this.page.getByRole('cell', { name: `${customerData.firstName}` })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: `${customerData.lastName}` })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: `${customerData.postcode}` })).toBeVisible();
    }

}