import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LoginModule } from '../modules/LoginModule';

type MyFixtures = {
  loginPage: LoginPage;
  loginModule: LoginModule;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  loginModule: async ({ page, loginPage }, use) => {
    await use(new LoginModule(page, loginPage));
  },
});

export { expect };
