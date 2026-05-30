In test automation, test hooks are special block functions provided by testing frameworks (like Playwright, Jest, or Mocha) that run automatically at specific points in a test execution lifecycle.

Think of hooks as the automated stage crew of a theater production. Before the actors come out to perform a scene (your actual test case), the stage crew sets up the background furniture. Once the scene ends, they immediately rush out to clear the stage for the next act.

Without test hooks, you would have to manually write repetitive setup and cleanup code inside every single test case, making your codebase messy and incredibly difficult to maintain.

The 4 Main Test Hooks in Playwright
Playwright provides four core hooks. They are split into two categories: Setup hooks (running before tests) and Teardown hooks (running after tests).

[Before All Tests Start]  --->  beforeAll() Runs Once
      │
      ├──> [Before Test 1] --->  beforeEach() Runs
      │         └──> Test 1 Runs 
      ├──> [After Test 1]  --->  afterEach() Runs
      │
      ├──> [Before Test 2] --->  beforeEach() Runs Again
      │         └──> Test 2 Runs
      ├──> [After Test 2]  --->  afterEach() Runs Again
      │
[All Tests Are Finished]  --->  afterAll() Runs Once
1. test.beforeEach()
This hook runs before every single individual test case inside your test file.

Best used for: Common actions that every test needs, like navigating to a URL, logging into a profile, or clearing browser cookies.

Analogy: Washing your hands before every meal you eat throughout the day.

2. test.afterEach()
This hook runs immediately after every single individual test case finishes (regardless of whether the test passed or failed).

Best used for: Cleaning up data created during that specific test, taking a screenshot if a test fails, or logging out.

Analogy: Clearing your plate and wiping down the table after every meal.

3. test.beforeAll()
This hook runs exactly once at the very beginning of the test file, before any test cases or beforeEach hooks start executing.

Best used for: Massive setup tasks that only need to happen once, like spinning up a local database instance or generating a global auth token.

Analogy: Going grocery shopping once at the beginning of the week.

4. test.afterAll()
This hook runs exactly once at the absolute end of the file, after all tests have completely finished executing.

Best used for: Tearing down configurations, closing active database connections, or compiling a custom test telemetry log.

Analogy: Cleaning out the entire refrigerator at the end of the week.

Why Use Test Hooks?
DRY Code (Don't Repeat Yourself): Instead of copying and pasting the login steps inside five different tests, you write it once in a beforeEach block.

Isolate Failures: If your login setup fails inside a beforeEach hook, Playwright skips the test block entirely and points specifically to the hook failing. This tells you immediately that the app environment is broken, rather than a specific test logic error.

Guaranteed Cleanup: If a test script crashes halfway through execution, code inside an afterEach hook is still guaranteed to execute, preventing corrupted or lingering states from messing up your subsequent tests.