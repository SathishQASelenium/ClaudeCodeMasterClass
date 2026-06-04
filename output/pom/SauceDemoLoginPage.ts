import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class SauceDemoLoginPage extends BasePage {
  // Locators
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  /**
   * Performs login with provided credentials.
   * @param username User's login identifier
   * @param password User's password
   */
  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /**
   * Retrieves the error message text if login fails.
   * @returns The text content of the error message
   */
  async getErrorMessage(): Promise<string | null> {
    return await this.errorMessage.textContent();
  }
}
