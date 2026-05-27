import { Page, Locator } from '@playwright/test';

/**
 * Layer 5: Component Layer
 * Encapsulates reusable UI components that appear across multiple pages.
 */
export class NavbarComponent {
  readonly page: Page;
  readonly profileLink: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileLink = page.getByRole('link', { name: 'My Profile' });
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
  }

  async logout(): Promise<void> {
    await this.logoutButton.click();
  }

  async navigateToProfile(): Promise<void> {
    await this.profileLink.click();
  }
}
