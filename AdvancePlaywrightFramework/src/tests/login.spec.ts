import { test, expect } from '../fixtures';
import { Config } from '../config';

test.describe('@P0 Login', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should login successfully with valid credentials', async ({ loginModule, page }) => {
    await test.step('Perform Login', async () => {
      await loginModule.doLogin(Config.userName, Config.password);
    });

    await test.step('Verify successful login', async () => {
      await expect(page).toHaveURL(/inventory/);
    });
  });

  test('should show error for invalid credentials', async ({ loginModule, page }) => {
    await test.step('Attempt login with wrong credentials', async () => {
      await loginModule.doLogin('invalid_user', 'wrong_pass');
    });

    await test.step('Verify error message', async () => {
      // Using fixture indirectly through the module's internal page flow
      // but for verification we might need the page object if laiered correctly
      // Here we just verify the presence of error on page
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    });
  });
});
