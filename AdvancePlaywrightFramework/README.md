# 🎭 AdvancePlaywrightFramework

Enterprise-Grade Playwright Automation Framework implementing an 8-layer architecture for maximum maintainability and scalability.

## 🚀 Architecture Overview

The framework is designed with a strict separation of concerns:

| Layer | Name | Responsibility | Key Pattern |
| :--- | :--- | :--- | :--- |
| 1 | **Configuration** | Env & Tooling config | `dotenv` + `playwright.config.ts` |
| 2 | **Pages** | Locators & basic UI actions | Arrow functions for fresh locators |
| 3 | **Modules** | Business logic orchestration | Page Object consumption |
| 4 | **Utilities** | Shared helpers | Static utility classes |
| 5 | **API Layer** | Backend testing/setup | `APIRequestContext` |
| 6 | **Fixtures** | Dependency Injection | Custom `test.extend` |
| 7 | **Reporting** | Test results visibility | HTML/JSON Reports + Trace files |
| 8 | **CI/CD** | Multi-browser execution | GitHub Actions / Jenkins integration |

## 📂 Project Structure

```text
AdvancePlaywrightFramework/
├── playwright.config.ts     # Core Playwright config
├── tsconfig.json             # TypeScript settings
├── .env                      # Environment variables
├── src/
│   ├── config/               # Environment management
│   ├── pages/                # Layer 2: Locators only
│   ├── modules/              # Layer 3: Business logic
│   ├── tests/                # Layer 7: Test specifications
│   ├── api/                  # Layer 5: API Testing
│   ├── utils/                # Layer 4: Helper utilities
│   └── fixtures/             # Layer 6: Custom fixtures (DI)
├── tta-report/               # Custom HTML reports
├── playwright-report/        # Default Playwright reports
└── test-results/             # Artifacts (screenshots/videos)
```

## 🛠️ Getting Started

### Installation
\`\`\`bash
cd AdvancePlaywrightFramework
npm install
\`\`\`

### Running Tests
- Run all tests: \`npm test\`
- Run headed: \`npm run test:headed\`
- Open UI Mode: \`npm run test:ui\`
- View Report: \`npm run report\`

## ⚠️ Coding Guidelines

1. **Pages**: NEVER put business logic (if/else, loops) in Page classes. Only use arrow functions for locators.
2. **Modules**: NEVER use `page.locator()` directly. Always use methods provided by Page classes.
3. **Tests**: Always use \`test.step()\`, tags (e.g., \`@P0\`), and inject dependencies via fixtures.
