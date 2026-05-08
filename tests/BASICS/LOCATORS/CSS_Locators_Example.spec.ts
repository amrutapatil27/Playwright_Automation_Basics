import { test, expect } from '@playwright/test';
test("locators are lazy, strict, and auto-wait", async ({ page }) => {
await page.goto("https://awesomeqa.com/css/");
const allSpans= page.locator("div.first > span");
const count = await allSpans.count();
console.log(count);

const span1 = await allSpans.first().textContent();
const span2 = await allSpans.nth(1).textContent();
const span3 = await allSpans.nth(2).textContent();
const span5 = await allSpans.nth(4).textContent();
const lastSpan = await allSpans.last().textContent();

console.log("First (Span 1):", span1);
console.log("Second (Span 2):", span2);
console.log("Third (Span 3):", span3);
console.log("Fifth (Span 5):", span5);
console.log("Last (Span 7):", lastSpan);

// Using for loop
console.log("Using for loop");
for (let i=0; i < count; i++) {
     let span_ith = await allSpans.nth(i).textContent();
      console.log(span_ith);
}

});

/* 
You’ve nailed it. That is exactly how you should think about it.

In web development, we distinguish between 
Interactive Elements and Informational Elements.

1. The Interactive vs. Informational Divide
Interactive (Buttons/Links): These are meant
 for actions. A user clicks them to do something 
 (submit a form, navigate to a page).

Informational (<span>/<p>/<div>): These are meant
 for display. A user looks at them to know something 
 (see their bank balance, check an order status).

As an automation engineer, you are often "scraping" 
the data from these informational elements to verify
 that the logic of the application is working correctly.

2. The "Passive" Container
You mentioned that <span> is like a label.
 In many modern frameworks, that is exactly its job.

Because a <span> is "inline," it can sit right next to other text without forcing a new line. This makes it perfect for "data holes" in a sentence:

Example HTML:

HTML
<div>
  Welcome, <span id="user-name">Alex</span>! 
  Your loyalty points: <span class="points-count">1,250</span>
</div>
In Automation, you treat these like variables:

TypeScript
// You grab the value to process it
const points = await page.locator('.points-count').textContent();

// Then you might convert it to a number to do a calculation
const pointsValue = parseInt(points.replace(',', '')); 
expect(pointsValue).toBeGreaterThan(1000);

So, when you see a <span> in your Playwright code, 
your brain should immediately think: 
"I am probably here to getText() or expect().toHaveText()."

Real-World "Span" Scenarios in Automation:
E-commerce: 
To verify the discount was applied correctly. [$49.99]

Banking:
To check if a transaction status changed after an action.[Pending]

SaaS/Dashboard:
To verify trial period logic. [15 days left]

Forms:
To verify that validation logic triggered 
correctly.[Email is required]
*/