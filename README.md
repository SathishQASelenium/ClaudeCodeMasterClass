# The Testing Academy - Claude Code Master Class

This repository is a comprehensive collection of automation frameworks and quality engineering resources, demonstrating the integration of advanced testing patterns and the use of AI-driven development with Claude Code.

## 🚀 Project Overview

The project serves as a showcase for diverse automation strategies, ranging from traditional Selenium-based Java frameworks to modern, layered Playwright architectures. It also includes theoretical insights into the evolution of Quality Assurance into Quality Engineering.

## 🛠️ Core Components

### 1. Selenium Advanced Framework (`/ATB14xSeleniumAdvanceFrameworks`)
A professional-grade automation suite built with Java and Selenium.
- **Architecture**: Implements both Page Object Model (POM) and Page Factory (PF) design patterns.
- **Tech Stack**: Java, Maven, TestNG, Allure Reports.
- **Infrastructure**: Containerized with Docker and Selenoid for scalable browser execution.
- **Key Features**:
  - Data-driven testing using Excel (`UtilExcel.java`).
  - Custom listeners for screenshots and test retries.
  - Support for multiple application targets (VWO, TTA Bank, Katalon Studio).

### 2. Playwright 8-Layer Architecture (`/playwright_8_layer`)
A modern E2E testing framework implementing a highly structured 8-layer separation of concerns.
- **Architecture**: Layers include Fixtures, Pages, Components, Modules, Workflows, Tests, Utils, and HTML Exporters.
- **Tech Stack**: TypeScript, Playwright.
- **Key Features**:
  - Modular page design with reusable components.
  - Workflow-based test orchestration.
  - Strong type safety and modern fixture management.

### 3. Quality Engineering Insights (`claude_code_for_qa.md`)
A strategic exploration of how AI agents like Claude Code shift the QA role from manual script writing to "Quality Architecture," focusing on system design and risk analysis.

### 4. Java Demonstrations (`myTest.java`)
A minimal Java environment for quick verification and "Hello World" tests.

## 💻 Getting Started

### Running Java Tests
For the minimal `myTest.java` example:
```bash
# Compile
javac myTest.java
# Run
java myTest
```

### Selenium Framework
Navigate to `/ATB14xSeleniumAdvanceFrameworks` and use Maven:
```bash
mvn clean test
```

### Playwright Framework
Navigate to `/playwright_8_layer` and use npm/npx:
```bash
npx playwright test
```

## 📁 Directory Structure
- `ATB14xSeleniumAdvanceFrameworks/` - Java/Selenium Enterprise Framework
- `playwright_8_layer/` - TypeScript/Playwright Layered Framework
- `CLAUDE.md` - Agent instructions and dev commands
- `claude_code_for_qa.md` - QA Strategic documentation
- `sathish_portfolio.html` - Professional portfolio
