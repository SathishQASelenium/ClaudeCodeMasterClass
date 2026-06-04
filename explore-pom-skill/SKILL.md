---
name: explore-app
description: Explores a given URL's landing page to identify key UI elements and generates a Playwright TypeScript Page Object Model (POM) including locators and action methods, using base page inheritance. Make sure to use this skill whenever the user mentions /explore, exploring a website for automation, or wants to generate a POM from a URL.
---

# Explore App & Generate POM

This skill automates the discovery of web elements on a landing page and transforms that discovery into a production-ready Playwright TypeScript Page Object Model.

## Workflow

1. **Page Exploration**:
   - Navigate to the provided URL.
   - Inspect the DOM to identify all primary interactive elements:
     - Input fields, text areas, dropdowns.
     - Buttons, links, clickable icons.
     - Form containers and labels.
   - Identify the logical structure of the page (e.g., Header, Footer, Main Form, Navigation Menu).

2. **Locator Strategy**:
   - Prioritize robust locators: `getByRole`, `getByLabel`, `getByPlaceholder`, `getByText`, and `getByTestId` where available.
   - Fall back to CSS selectors only if a more semantic locator is unavailable.
   - Ensure locator names are descriptive (e.g., `loginButton` instead of `btn1`).

3. **POM Generation**:
   - Create a TypeScript class that extends a `BasePage`.
   - **Properties**: Define locators using `readonly` properties and `this.page.locator()` or Playwright's locator methods.
   - **Action Methods**: Implement high-level business actions that combine multiple locators (e.g., `async submitLoginForm(user, pass)`).

## Output Format

The output must be a complete TypeScript file.

### Code Template
```typescript
import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page'; // Assume existence of a BasePage

export class [PageName]Page extends BasePage {
  // Locators
  readonly loginInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.loginInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.submitButton = page.getByRole('button', { name: 'Login' });
  }

  // Action Methods
  async login(username: string, password: string): Promise<void> {
    await this.loginInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
```

## Guidelines
- **Completeness**: Do not skip obscure but interactive elements. If it can be clicked or typed into, it should be in the POM.
- **Inheritance**: Always extend `BasePage`.
- **Type Safety**: Use strict TypeScript types.
- **Documentation**: Add brief JSDoc comments to action methods explaining their purpose.
