import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Logger } from '../utils/Logger';

export class LoginModule {
  constructor(private page: Page, private loginPage: LoginPage) {}

  /**
   * Performs the complete login flow.
   * @param username User's login ID
   * @param password User's password
   */
  async doLogin(username: string, password: string) {
    Logger.info(`Attempting login for user: ${username}`);

    await this.loginPage.fillUsername(username);
    await this.loginPage.fillPassword(password);
    await this.loginPage.clickSubmit();

    Logger.info('Login submission clicked');
  }

  async doLogout() {
    Logger.info('Performing logout action');
    // Implement logout logic via specific page object
  }
}
