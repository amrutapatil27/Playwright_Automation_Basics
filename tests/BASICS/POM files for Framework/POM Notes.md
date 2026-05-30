POM stands for Page Object Model. It is an industry-standard design pattern used in test automation to make your code clean, organized, and easy to maintain.

Instead of writing all your locators and test steps in one giant file, POM forces you to create a separate class file for each page of your website.
With the Page Object Model, you split your automation framework into two distinct parts:

The Page Class File: Stores all the locators and actions (methods) for a specific page.

The Test File: Contains only the actual test assertions and logic.

If a locator changes in the future, you only update it once inside the Page Class file, and all 50 tests are automatically fixed!
Step 1: Create the Page Class (LoginPage.ts)
This file only holds the elements and actions of the login page. It doesn't contain any tests.
Why Hiring Managers Look for POM on Resumes
When you implement POM in your framework, it shows you aren't just writing scripts—you are designing scalable architecture.

Reusability: Anyone on your team can reuse your loginPage.login() method without needing to figure out how the login form elements are built.

Readability: Your test files are completely stripped of ugly, hard-coded string selectors. They focus purely on the behavior of the application.

Maintainability: If the UI layout changes, your changes are isolated to a single class file. Your test cases remain completely untouched!
>readonly page: Page;
>readonly usernameInput: Locator;
Why not const or let? (Class Syntax Rules)
In JavaScript/TypeScript, const and let can only be used inside functions or code blocks. They cannot be used directly inside the body of a class to define fields.

Why not private? (Encapsulation vs. Extension)
The private keyword changes who can see the variable, whereas readonly changes if it can be modified.


private means the locator can only be used inside the LoginPage class itself. Your test files wouldn't be able to see it at all.

readonly keeps the locator public (by default), meaning your test files can still access it, but they can only read it, not change it.


// 30 May 2026
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  // Define types for the locators

  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Initialize the locators in one single place!
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  // Define reusable actions (methods) for this page
  async navigateTo() {
    await this.page.goto('https://example.com/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
Step 2: Create the Clean Test File (login.spec.ts)
Now, look how beautiful, clean, and readable your actual test file becomes. It reads like plain English:

import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage'; // Import your page object

test('User should be able to log in successfully', async ({ page }) => {
  // Create an instance of the LoginPage
  const loginPage = new LoginPage(page);

  // Use the clean methods from your POM class
  await loginPage.navigateTo();
  await loginPage.login('standard_user', 'secret_password');

  // Verify the dashboard loads successfully
  await expect(page).toHaveURL('https://example.com/dashboard');
});