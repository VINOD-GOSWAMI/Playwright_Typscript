import { test } from '../fixtures/fixtures';
import * as customerData from '../data/customer.json';

test('Add Currency For the Customer', async ({ managerHomePage }) => {
  const addCustomerPage = await managerHomePage.clickOnAddCustomerButton();
  await addCustomerPage.addCustomer(customerData.firstName, customerData.lastName, customerData.postcode);
  const openAccountPage = await managerHomePage.clickOnOpenAccountButton();
  await openAccountPage.openAccount(`${customerData.firstName} ${customerData.lastName}`, 'Dollar');
});
