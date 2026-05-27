import { test, expect } from '../fixtures/test-fixtures';
import { TEST_DATA } from '../../utils/test-data';

/**
 * Layer 7: Test Layer
 * Focuses on assertions and user journeys using the underlying layers.
 */
test.describe('Authentication Suite', () => {

  test('should successfully login using the workflow layer', async ({ authWorkflow, page }) => {
    await authWorkflow.completeLoginSequence(TEST_DATA.validUser.email, TEST_DATA.validUser.password);
    await expect(page).toHaveURL('/dashboard');
  });

  test('should logout using the component layer', async ({ authWorkflow, navbar, page }) => {
    await authWorkflow.completeLoginSequence(TEST_DATA.validUser.email, TEST_DATA.validUser.password);
    await navbar.logout();
    await expect(page).toHaveURL('/login');
  });
});
