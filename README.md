# Playwright_Typscript
To Run Test Parallel Give Workers Number in Command Prompt
npx playwright test tests/test-3.spec.ts --workers=4

To Save Video Of Execution 
Set Below Property in use object of playwright.config.ts
video: {
    mode: 'on',
    size: { width: 640, height: 480 }
}

To open last HTML report run:
npx playwright show-report
