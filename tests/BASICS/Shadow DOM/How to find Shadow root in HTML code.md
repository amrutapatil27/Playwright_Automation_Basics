
Open Web Page-> Inspect->Console : Enter following code (javascript)



> document.querySelector('#card-1');

<

<tta-input-card id="card-1" data-testid="card-account">

#shadow-root (open)

<span slot="title">Sign in</span>

</tta-input-card>

> document.querySelector('#card-1').shadowRoot;

#shadow-root (open)

<style>...</style>

<div class="card" data-testid="card-account-card"> </div>

>
Is there any catch?
While Playwright makes it feel seamless, there are two rules you must keep in mind:

It only works for Open Shadow DOMs: If a developer locks down a component using { mode: 'closed' }, it becomes mathematically invisible to the browser's accessibility and querying trees. Playwright cannot automatically pierce a closed shadow root (though thankfully, 99% of web components in the industry use open mode).

XPath cannot pierce Shadow DOMs: If you write locators using standard XPath (e.g., page.locator('//input[@id="email"]')), it will fail. XPath is a legacy strategy that strictly traverses the visible Light DOM tree and gets blocked by the shadow boundary.

💡 The Golden Rule: As long as you stick to Playwright's modern locators (getByTestId, getByRole, locator('css-selectors')), you can completely forget the Shadow DOM is even there. Playwright will do all the heavy lifting for you!