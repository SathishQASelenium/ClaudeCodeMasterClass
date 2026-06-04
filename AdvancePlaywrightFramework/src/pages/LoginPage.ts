import { Page, Locator } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // Locators as arrow functions for fresh evaluation
  usernameInput = () => this.page.locator('#user-name');
  passwordInput = () => this.page.locator('#password');
  submitBtn = () => this.page.locator('#login-button');
  errorMessage = () => this.page.locator('[data-test="error"]');

  // Basic UI actions
  async fillUsername(username: string) {
    await this.usernameInput().fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordInput().fill(password);
  }

  async clickSubmit() {
    await this.submitBtn().click();
  }

  async getErrorMessage() {
    return await this.errorMessage().textContent();
  }
}
