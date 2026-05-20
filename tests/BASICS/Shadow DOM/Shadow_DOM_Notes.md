Handling Shadow DOM

May 14, 2026

Shadow DOM is a web standard that lets a component encapsulate its own DOM tree and CSS, hidden from the main document.

Think of it as a "sealed compartment" inside an element that the outside page can't see in, and the inside styles don't leak out
If you are writing test automation scripts (like Selenium or Cypress), the Shadow DOM is historically your worst nightmare.
Why it exists

When you use a video tag, you get play buttons, a progress bar, and volume controls. Where does that HTML live? It's not in the page source. The browser builds it inside a shadow DOM attached to the video element. Same with `<input type="date">`, `<select>`, and other native widgets.

Web Components (custom elements like `<my-button>`) use the same mechanism. A component author wraps internal HTML and CSS in a shadow root so their button styles don't conflict with the host page's CSS, and the host page's CSS doesn't accidentally break the component
Why testers care

Shadow DOM breaks traditional selectors. In Selenium:

// This FAILS - can't pierce shadow boundary with regular selectors driver.findElement(By.cssSelector("my-component button"))

Playwright handles it automatically

// Just works - Playwright pierces shadow DOM transparently

> await page.locator('my-component button').click();

If you try to locate a button inside a Shadow DOM using standard methods, your test will throw a NoSuchElementException or a timeout failure. The automation engine literally cannot see past the Shadow Root boundary.

The Playwright Advantage 🚀
One of the primary reasons modern automation engineers love Playwright is that it handles the Shadow DOM completely automatically.
// In Selenium, this would fail if the input is inside a Shadow DOM.
// In Playwright, it pierces the Shadow DOM layer naturally and works seamlessly!
> await page.locator('#shadow-input').fill('Hello World');