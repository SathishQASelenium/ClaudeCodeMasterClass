import { LoginPage } from '../pages/modules/login.page';
import { Page } from '@playwright/test';

/**
 * Layer 6: Business Workflow Layer
 * Combines multiple page actions into a high-level user journey.
 */
export class AuthWorkflow {
  private loginPage: LoginPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
  }

  async completeLoginSequence(email: string, pass: string): Promise<void> {
    await this.loginPage.goto();
    await this.loginPage.login(email, pass);
    // Additional sequence steps could go here (e.g., handling 2FA)
  }
}
