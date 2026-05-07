1. page.goto()

You need to OPEN a page. page.goto(url) is how every Playwright test begins.

await page.goto("https://app.com/page1")

There are 4 options, from fastest to slowest:

commit: The server has responded. HTML may not even be parsed yet. Use this for testing redirects or checking HTTP status codes.

domcontentloaded: The HTML is fully parsed and the DOM tree is built. CSS, images, and fonts may still be loading. Use when you need elements in the DOM but don't care about visuals.

load: Everything is loaded, including images, CSS, fonts, and scripts. This is the DEFAULT. Use for most tests.

networkidle: No network requests for 500ms. The page is completely quiet. Use for SPAS (React, Angular, Vue) that fetch data via API calls AFTER the initial HTML loads