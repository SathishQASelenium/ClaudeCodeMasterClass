# Claude Code Masterclass

A hands-on workspace from **The Testing Academy** showing how to drive Claude Code as a QA automation copilot — building reusable **Skills** and **slash commands**, wiring up the **Atlassian (Jira) MCP**, generating formal **test plans** from Jira tickets, and filing **bug reports** straight into Jira.

This repo also contains two complete test automation frameworks (Selenium Java + Playwright TypeScript) demonstrating advanced design patterns.

This README doubles as a **session log**: every prompt used to build the repo is documented below so the workflow is reproducible.

---

## Project Structure

```
ClaudeCodeMasterClass/
│
├── ATB14xSeleniumAdvanceFrameworks/     # Selenium Java framework (TestNG, Maven, Allure)
├── playwright_8_layer/                  # Playwright TypeScript 8-layer framework
├── test-plan-create-skill/              # AI Skill: /test-plan command
├── bug-report-create-skill/             # AI Skill: /create-bug command (referenced, not present)
│
├── config/                              # (empty) Configuration files placeholder
├── core/                                # (empty) Core logic placeholder
├── fixtures/                            # (empty) Test fixtures placeholder
├── html-exporter/                       # (empty) HTML exporter placeholder
├── output/testplan/                     # Generated test plans (.md + .docx)
├── pages/                               # (empty) Page objects placeholder
├── tests/                               # (empty) Test specs placeholder
├── utils/                               # (empty) Utilities placeholder
├── workflows/                           # (empty) Business workflows placeholder
│
├── README.md                            # This file
├── CLAUDE.md                            # Project guidance for Claude Code
├── myTest.java                          # Hello-World Java sandbox
├── sathish_portfolio.html               # Personal portfolio page
├── claude_code_for_qa.md                # Strategic article on AI for QA
├── vwo-25.md                            # Sample PRD input for test-plan skill
├── restful-booker-api-test-plan.md      # Sample test plan output
├── 2026-05-27-*-command-message.txt     # Auto-generated session log
│
└── .claude/                             # Claude Code config + worktrees
```

---

## Detailed Breakdown

### 1. `ATB14xSeleniumAdvanceFrameworks/` — Selenium Automation Framework

**Stack:** Java 17, Selenium 4.27.0, TestNG 7.10.2, Maven, AssertJ, Allure, Log4j2, Apache POI, Selenoid

An enterprise-grade Selenium framework demonstrating multiple Page Object Model patterns:

- **Standard POM** (`pages/POM/vwo/normal_POM/`) — VWO Login, Dashboard, Free Trial, Support pages
- **Improved POM** (`pages/POM/vwo/improved_POM/`) — Enhanced encapsulation
- **Page Factory** (`pages/PF/vwo/`) — `@FindBy` annotations
- **TTA Bank & Katalon** (`pages/POM/TTABank/`, `pages/POM/katalonStudio/`) — Additional app pages

Key features:
- `DriverManager.java` — Thread-safe browser factory (Chrome, Firefox, Edge, Opera)
- `CommonToAll.java` / `CommonToAllTest.java` — Base page and test classes
- `RetryAnalyzer.java` — Flaky test retry mechanism
- `ScreenshotListener.java` — Failure screenshot capture
- `UtilExcel.java` — Data-driven testing from `TESTDATA.xlsx`
- `WaitHelpers.java` — Centralized explicit wait logic
- `PropertiesReader.java` — Config via `data.properties`
- Docker + Selenoid grid (`docker-compose.yml`, `Dockerfile`)
- CI/CD (`pom.xml` with 5 Maven profiles, `.gitlab-ci.yml`, `.github/workflows/`)
- `testng_*.xml` — Two TestNG suite configurations

### 2. `playwright_8_layer/` — Playwright TypeScript Framework

**Stack:** TypeScript, Playwright, Node.js

A strict **8-layer architecture** E2E testing framework:

| Layer | File | Purpose |
|-------|------|---------|
| 1 | `playwright.config.ts` | Global config (Chromium, retries, reporters) |
| 2 | `fixtures/test-fixtures.ts` | Dependency injection fixtures |
| 3 | `pages/base/base.page.ts` | Abstract base page (navigate, wait, screenshot) |
| 4 | `pages/modules/login.page.ts` | Login page object |
| 5 | `pages/components/navbar.component.ts` | Navigation bar component |
| 6 | `workflows/auth.workflow.ts` | Complete auth business flow |
| 7 | `tests/e2e/auth.spec.ts` | Login + logout test specs |
| 8 | `utils/test-data.ts` | Test data & helpers |

Additional files: `html-exporter/SKILL.md` (Claude Code skill), `playwright-e2e.SKILL.md` (POM best practices), generated HTML outputs.

### 3. `test-plan-create-skill/` — Test Plan Generator Skill

```
test-plan-create-skill/
├── SKILL.md                   # Skill definition + instructions
├── assets/
│   └── test-plan-template.md  # 14-section canonical template
├── references/
│   └── jira-mapping.md        # Jira field-to-template mapping
└── scripts/
    └── md_to_docx.py          # Markdown → Word .docx converter
```

**Command:** `/test-plan` — turns a Jira ticket (file, paste, or live MCP fetch) into a formal test plan as `.md` or `.docx`.

### 4. `output/testplan/` — Generated Artifacts

```
output/testplan/
├── batch/        # 4 parallel-generated plans (VWO-25, VWO-26, VWO-100, VWO-101)
├── docx/         # Single VWO-25 plan (.md + .docx)
└── mcp/          # VWO-105 plan fetched live via Atlassian MCP
```

### 5. Empty Scaffold Directories

These directories are placeholders for a flattened 8-layer architecture outside `playwright_8_layer/`:

| Directory | Intended For |
|-----------|-------------|
| `config/` | Configuration files |
| `core/` | Core logic / helpers |
| `fixtures/` | Test fixtures |
| `html-exporter/` | HTML export artifacts |
| `pages/{base,components,modules}/` | Page objects by layer |
| `tests/e2e/` | End-to-end test specs |
| `utils/` | Shared utilities |
| `workflows/` | Business workflow compositions |

### 6. Root Files

| File | Description |
|------|-------------|
| `CLAUDE.md` | Project guidance for Claude Code acting as a router across sub-projects |
| `myTest.java` | Minimal Java sandbox — `javac myTest.java && java myTest` prints "Hello" |
| `sathish_portfolio.html` | Personal portfolio page (dark theme, CSS grid, rainbow cursor, experience cards) |
| `claude_code_for_qa.md` | Article: "Claude Code for QA: The Dawn of the Quality Architect" |
| `vwo-25.md` | Sample PRD for VWO login dashboard (input for `/test-plan`) |
| `restful-booker-api-test-plan.md` | Sample 14-section test plan for Restful Booker API |

### 7. `.claude/`

```
.claude/
├── settings.local.json          # Permission allowlist
└── worktrees/                   # Git worktrees for parallel agent tasks
```

---

## The Two AI Skills

### `/test-plan` — Test Plan Generator

```bash
/test-plan ./ticket.md                  # From a markdown/text file
/test-plan VWO-105                       # Fetch live via Atlassian MCP
/test-plan VWO-105 create a docx in ./output/testplan/mcp
```

Fills a 14-section template (Objective, Scope, Inclusions, Test Environments, Defect Reporting, Test Strategy, Schedule, Deliverables, Entry/Exit Criteria, Tools, Risks & Mitigations, Approvals). Detects UI vs API tickets and shapes sections accordingly.

### `/create-bug` — Jira Bug Filer

```bash
/create-bug                              # Then paste screenshot + notes
/create-bug REST                         # File on a different project (default VWO)
```

Reads screenshot (extracts page/URL + error text), fills 5-section bug template (Bug Details → Steps → Expected → Actual → Attachments), creates via Atlassian MCP `createJiraIssue`.

---

## Jira / Atlassian MCP

The Atlassian MCP connects via **OAuth** (Claude connectors) — no API token needed. Reference tickets by key or JQL and Claude fetches them live.

Tickets created during this masterclass: **VWO-105** (TTACart PRD), **VWO-106** and **VWO-107** (login bugs).

---

## Prompt Log — How This Repo Was Built

1. **`/init`** → Rewrote `CLAUDE.md` as a router across the multi-project workspace.
2. **`claude plugin install skill-creator@claude-plugins-official`** → Installed the skill-creator plugin.
3. **"Create a skill for Jira ticket → test plan"** → Built `test-plan-create-skill/` with `/test-plan` command.
4. **`/test-plan @vwo-25.md create the output as a docx file`** → Added `md_to_docx.py` converter.
5. **`/test-plan VWO-105 create the test plan for this JIRA, fetch via the MCP`** → Live-fetched via MCP.
6. **`/test-plan VWO-25, VWO-101, VWO-26, VWO-100 — spawn multiple agents`** → 4 parallel plans into `output/testplan/batch/`.
7. **"Create a skill for bug reporting"** → Built `bug-report-create-skill/` with `/create-bug` command.
8. **`/create-bug` (VWO login screenshot)** → Filed **VWO-106** and **VWO-107**.
9. **"Commit the code and push to the GitHub repo, and add a README"** → This commit + this README.

---

## Setup

- **Java sandbox:** `javac myTest.java && java myTest`
- **Selenium framework:** `cd ATB14xSeleniumAdvanceFrameworks && mvn test -Dsurefire.suiteXmlFiles=testng.xml`
- **Playwright framework:** `cd playwright_8_layer && npm install && npx playwright test`
- **Skills:** Copy `test-plan-create-skill/` to `~/.claude/skills/`, command files to `~/.claude/commands/`, or upload to Claude in the cloud.

---

*Built with Claude Code — The Testing Academy.*
