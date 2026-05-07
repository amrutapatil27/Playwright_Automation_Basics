getByRole() is widely considered the most powerful and recommended locator in Playwright. It finds elements based on their ARIA (Accessible Rich Internet Applications) role and attributes.

Instead of looking at the code's "internal" structure (like IDs or classes), it looks at the page the same way a Screen Reader or a human user does.

1. How it works
Every HTML element has a "Role." Some are built-in (implicit), and some are assigned manually.

<button> has the role button.

<a> has the role link.

<h1> through <h6> have the role heading.

<input type="checkbox"> has the role checkbox.

2. The Syntax
The basic syntax allows you to target the type of element and then filter it by its accessible name (usually the text inside it, its label, or its title).

TypeScript
await page.getByRole('button', { name: 'Submit' }).click();
3. Why getByRole() is the "Gold Standard"
A. Resiliency (It doesn't break easily)
If a developer changes a button from a <button> tag to a <div> with a role="button" attribute, your test will still pass.
If they change the CSS class from .btn-blue to .btn-red, your test will still pass.
The test only breaks if the "role" (what it is) or the "name" (what it says) changes.

B. It Teaches Good Coding Habits
If Playwright cannot find an element using getByRole, it usually means the website is not accessible to people with disabilities. By using this locator, you are performing a "mini-accessibility audit" every time you run your tests.

C. Handling Ambiguity
If you have multiple buttons on a page, you can use attributes like exact, checked, disabled, or expanded to find the right one.

TypeScript
// Finds the specific "Subscribe" heading, ignoring smaller sub-headings
await page.getByRole('heading', { name: 'Subscribe', level: 2 });

// Finds only the checkbox that is currently checked
await page.getByRole('checkbox', { checked: true });
<button aria-label="Close Sidebar"> X </button>
await page.getByRole('button', { name: 'Close Sidebar' }).click(); // This works!
When to NOT use it?
Don't use it for non-semantic layout elements like <div> or <span> unless they have been specifically given a role. For those, getByText() or locator() are better choices.

Interview Question Tip: If asked why you prefer getByRole, always mention "Robustness against UI changes" and "Accessibility-first testing."
																						