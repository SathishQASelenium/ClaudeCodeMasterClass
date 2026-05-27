import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/modules/login.page';
import { NavbarComponent } from '../pages/components/navbar.component';
import { AuthWorkflow } from '../workflows/auth.workflow';

/**
 * Dependency Injection via Playwright Fixtures
 * Bridges the layers together for the Test Layer.
 */
type MyFixtures = {
  loginPage: LoginPage;
  navbar: NavbarComponent;
  authWorkflow: AuthWorkflow;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  navbar: async ({ page }, use) => {
    await use(new NavbarComponent(page));
  },
  authWorkflow: async ({ page }, use) => {
    await use(new AuthWorkflow(page));
  },
});

export { expect } from '@playwright/test';
