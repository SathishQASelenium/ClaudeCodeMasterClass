/**
 * Layer 8: Data & Utilities Layer
 * Centralizes test data and helper functions.
 */
export const TEST_DATA = {
  validUser: {
    email: 'user@example.com',
    password: 'SecurePass123!',
  },
  invalidUser: {
    email: 'wrong@example.com',
    password: 'WrongPass123!',
  },
};

export class TestHelpers {
  static async randomString(length: number = 10): Promise<string> {
    return Math.random().toString(36).substring(2, 2 + length);
  }
}
