import { test as baseTest, Page } from '@playwright/test';
import LoginPage from '../page/loginPage';
import ManagerHomePage from '../page/ManagerHomePage';
type TestFixtures = {
  page: Page;
  managerHomePage: ManagerHomePage;
};

export const test = baseTest.extend<TestFixtures>({
  managerHomePage: async ({ page }, use) => {
    const loginPage=new LoginPage(page);
    await loginPage.goTo();
    const managerHomePage=await loginPage.clickOnBankManagerLoginButton();
    await use(managerHomePage);
  },
});
