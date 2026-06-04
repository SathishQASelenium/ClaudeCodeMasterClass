# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> @P0 Login >> should show error for invalid credentials
- Location: src\tests\login.spec.ts:20:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#user-name')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Example Domain" [level=1] [ref=e3]
  - paragraph [ref=e4]: This domain is for use in documentation examples without needing permission. Avoid use in operations.
  - paragraph [ref=e5]:
    - link "Learn more" [ref=e6] [cursor=pointer]:
      - /url: https://iana.org/domains/example
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   // Locators as arrow functions for fresh evaluation
  7  |   usernameInput = () => this.page.locator('#user-name');
  8  |   passwordInput = () => this.page.locator('#password');
  9  |   submitBtn = () => this.page.locator('#login-button');
  10 |   errorMessage = () => this.page.locator('[data-test="error"]');
  11 | 
  12 |   // Basic UI actions
  13 |   async fillUsername(username: string) {
> 14 |     await this.usernameInput().fill(username);
     |                                ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  15 |   }
  16 | 
  17 |   async fillPassword(password: string) {
  18 |     await this.passwordInput().fill(password);
  19 |   }
  20 | 
  21 |   async clickSubmit() {
  22 |     await this.submitBtn().click();
  23 |   }
  24 | 
  25 |   async getErrorMessage() {
  26 |     return await this.errorMessage().textContent();
  27 |   }
  28 | }
  29 | 
```