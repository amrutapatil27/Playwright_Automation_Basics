# Run all tests: 
npx playwright test

# Run specific file:
npx playwright test tests/login.spec.ts


# Run tests with specific browser:
npx playwright test --project=chromium

# Run in headed mode:
npx playwright test --headed

# Run in debug mode:
npx playwright test --debug

# Run with UI mode:
npx playwright test --ui

# Show report:
npx playwright show-report

_______________________________________
Test annotations are used :
skip,only etc