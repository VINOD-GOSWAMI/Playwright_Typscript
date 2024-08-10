import { test } from '../fixtures/fixtures';
import * as customerData from '../data/customer.json';


test('Add customer from Bank Manager', async ({ managerHomePage, page }) => {
    const addCustomerPage = await managerHomePage.clickOnAddCustomerButton();
    await addCustomerPage.addCustomer(customerData.firstName, customerData.lastName, customerData.postcode);
})


