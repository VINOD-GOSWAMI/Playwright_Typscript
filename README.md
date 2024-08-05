# Playwright + TypeScript Project

This project uses [Playwright](https://playwright.dev/) for end-to-end testing with [TypeScript](https://www.typescriptlang.org/). It includes configuration and examples for setting up and running tests efficiently.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
  - [Run All Tests](#run-all-tests)
  - [Run Specific Test File](#run-specific-test-file)
  - [Run Specific Test](#run-specific-test)
  - [Run Specific Test Group](#run-specific-test-group)
  - [Run Tests in Parallel](#run-tests-in-parallel)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 14.x)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation
1. **Clone the repository:**
   ```bash
   git https://github.com/VINOD-GOSWAMI/Playwright_Typscript.git
   cd Playwright_Typscript
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Install browsers:**
   ```bash
   npx playwright install
   ```

## Running Tests
### Run All Tests
To run all tests:
```bash
npm playwright test
```
### Run Specific Test File
To run a specific test file:
```bash
npx playwright test path/to/your/test-file.spec.ts
```

### Run Specific Test
To run a specific test within a file using a test name or test ID:
```bash
npx playwright test --grep "test name"
```

### Run Specific Test Group
To run tests with specific tags (you must tag your tests accordingly):
```bash
npx playwright test --grep @group-tag
```
TypeScript Test File View:
```typescript
// In your test file
import { test } from '@playwright/test';

test('example test', async ({ page }) => {
  // test code
}).tags(['group-tag']);
```

### Run Tests in Parallel
To run tests in parallel, configure the number of workers in playwright.config.ts:
```bash
workers: 4, // Adjust the number of workers based on your needs
```
You can also specify the number of parallel workers directly in the command line:
```bash
npx playwright test --workers=4
```
