A locator is a way of identifying an element on a web page so that it can be interacted with.

There are several different types of locators that can be used, including:

ID: This locator type uses the unique ID attribute of an element to locate it on the page.

Name: This locator type uses the name attribute of an element to locate it on the page.

Class name: This locator type uses the class attribute of an element to locate it on the page.

Tag name: This locator type uses the HTML tag name of an element to locate it on the page.

CSS selector: This locator type uses a CSS selector to locate an element on the page.

XPath: This locator type uses an XPath expression to locate an element on the page.

When writing test scripts with Selenium, you can use a combination of these locator types to accurately and reliably locate elements on the page.

data-testid="to-testID-origin"

*Preference rule

ID -> NAME -> CLASS-> TAG ->NAME-> CSS-> XPATH

Check this website: cheat sheet for locators innplaywright:

https://app.thetestingacademy.com/playwright-locator-strategy-cheat-sheet

Playwright works best with getByRole(),getByText() etc

xpath works best with Selenium but not with Playwright. 

**In playwright.config file add this to run all the test cases in headed mode by default
/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

// below this -> trace: 'on-first-retry',

headless: false

How to find locator name in playwright: 
Easy tricks:
1. The "Cheat Code": Playwright CodeGen
This is the fastest method. When you run CodeGen and hover over an element, Playwright displays a tooltip showing the exact getByRole syntax it recommends.

How to do it:

Open your terminal in your project.

Type: npx playwright codegen [URL]

Hover your mouse over the element.

Look at the floating tooltip. It will say something like:
page.getByRole('button', { name: 'Submit' })

2. The Integrated Way: VS Code Extension
If you use the Playwright VS Code extension, you can find locators without leaving your editor.

How to do it:

Click the Testing icon (the beaker) in the VS Code sidebar.

Click the Pick Locator button (the arrow-in-a-box icon).

Your browser will open. As you hover over elements, the getByRole locator will appear in a box at the bottom of your VS Code window.

Click the element, and the locator is automatically copied to your clipboard.

3. The Professional Way: Browser "Accessibility" Pane
If you want to understand why an element has a certain role or name (especially if the automatic tools are giving you something weird), use the browser’s built-in DevTools.

How to do it:

Right-click the element on the page and select Inspect.

In the DevTools window, look for the Accessibility tab.

In Chrome/Edge: It’s usually a sub-tab next to "Styles" and "Computed." You might need to click the » icon to see it.

Look for the ARIA Attributes or Accessibility Tree section.

Role: Will be listed clearly (e.g., role: "link" or role: "heading").

Name: Look for the "Name" property. This is what you put inside the { name: '...' } object.

For simple button like getByRole('button', { name: 'Log in' }) keep as it is. 
___________________________________________________
For Dynamic Header use filters. 

getByText('Welcome back, Alex!');

instead use filter because Alex name can be changed

getByRole('heading').filter({ hasText: 'Welcome back' });
____________________________________________________
Table Action:
locator('tr:nth-child(5) > td:nth-child(3) > button');

The tool used a fragile CSS path; the refactored version uses data logic.

userRow.getByRole('button', { name: 'Delete' });

**Pro-Tip: In an interview, if you are asked this, say: "I use codegen and Pick Locator as a starting point to identify the accessibility roles and names defined in the DOM, but I always refactor the output to ensure the locators follow the Page Object Model and remain resilient to dynamic data changes."