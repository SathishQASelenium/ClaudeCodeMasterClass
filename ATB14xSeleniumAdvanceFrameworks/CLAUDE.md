# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands
- Build and run tests: `mvn test -Dsurefire.suiteXmlFiles=testng.xml`
- Run a specific test suite: `mvn test -Dsurefire.suiteXmlFiles=<path-to-xml>`
- Clean and install dependencies: `mvn clean install`
- Generate Allure Report: `allure serve allure-results`

## Architecture
This is a Selenium automation framework using Java, TestNG, and Maven, implementing multiple design patterns for scalability and maintainability.

### Core Components
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

### Infrastructure
- **Selenoid**: Integrated via Docker for running tests on a scalable remote browser grid.
- **Configuration**: Managed in `src/main/resources/data.properties`.
