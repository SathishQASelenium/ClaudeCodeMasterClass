# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Selenium Framework (`ATB14xSeleniumAdvanceFrameworks`)
- Build and run tests: `mvn test -Dsurefire.suiteXmlFiles=testng.xml`
- Run a specific test suite: `mvn test -Dsurefire.suiteXmlFiles=<path-to-xml>`
- Clean and install dependencies: `mvn clean install`
- Generate Allure Report: `allure serve allure-results`

### Playwright Framework (`playwright_8_layer`)
- Run tests: `npx playwright test`
- Run specific test: `npx playwright test <test-file>`
- UI Mode: `npx playwright test --ui`

### Miscellaneous
- Quick run (Java 11+): `java myTest.java`
- Compile: `javac myTest.java`

## Architecture

This repository contains multiple test automation frameworks demonstrating different tools and design patterns.

### 1. Selenium Automation Framework (`ATB14xSeleniumAdvanceFrameworks`)
A comprehensive Java-based framework using Selenium, TestNG, and Maven.

- **Driver Management**: `DriverManager` acts as a browser factory and ensures thread safety for parallel execution.
- **Base Layers**:
    - `CommonToAll`: Base page class providing common Selenium actions (wrapped methods for click, sendKeys, etc.).
    - `CommonToAllTest`: Base test class handling setup (`@BeforeMethod`) and teardown (`@AfterMethod`).
- **Page Object Layer**:
    - **Standard POM**: Located in `pages/POM/`, separates locators from actions.
    - **Page Factory (PF)**: Located in `pages/PF/`, uses `@FindBy` annotations for lazy initialization of elements.
- **Utility Layer**:
    - `PropertiesReader`: Loads environment and browser configurations from `data.properties`.
    - `UtilExcel`: Handles data-driven testing by reading from `TESTDATA.xlsx`.
    - `WaitHelpers`: Centralizes explicit wait logic.
- **Test Execution & Reporting**:
    - **TestNG**: Orchestrates tests via XML suites.
    - **Listeners**: Implements `RetryAnalyzer` (for flaky tests) and `ScreenshotListener` (for failure capture).
    - **Reporting**: Integration with Allure for visual test reports and Log4j for execution logs.
- **Infrastructure**: Integrated with Selenoid via Docker for scalable remote browser grid execution.

### 2. Playwright Framework (`playwright_8_layer`)
A TypeScript-based framework implementing an 8-layer architecture for high maintainability.

- **Layers**:
    - **Pages**: Base pages and module-specific pages (e.g., `login.page.ts`).
    - **Components**: Reusable UI components (e.g., `navbar.component.ts`).
    - **Workflows**: High-level business flows (e.g., `auth.workflow.ts`).
    - **Fixtures**: Custom test fixtures for state management (`test-fixtures.ts`).
    - **Utils**: Shared test data and utility functions.
    - **Tests**: E2E specifications (`auth.spec.ts`).
- **Configuration**: Defined in `playwright.config.ts`.

### 3. Miscellaneous
- `myTest.java`: Simple Java class for basic demonstration.
- `sathish_portfolio.html`: A personal portfolio page.
- `claude_code_for_qa.md`: Strategic exploration of AI agents in Quality Engineering.
