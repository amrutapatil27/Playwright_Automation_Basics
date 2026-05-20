//12 May 2026

import { test, expect, Locator } from "@playwright/test";

// Note: Flipkart's base URL works perfectly for this test
const URL = 'https://www.flipkart.com/'; 

test.describe('SVG handling', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test('locate SVG root and assert visible', async ({ page }) => {
    // 1. Fix the space in the CSS selector to target the search input
    const searchInput = page.locator('input[name="q"]');
    await searchInput.fill("macmini");

    // 2. Target the specific SVG inside the submit button using a chained locator
    const searchButtonSvg = page.locator("button[type='submit']").locator("svg");
    
    // 3. Best practice: Assert it is visible before interacting
    await expect(searchButtonSvg).toBeVisible();

    // 4. Click the SVG/Button to trigger the search
    await searchButtonSvg.click();

    // 5. Assert the search actually worked instead of using a hardcoded timeout
    await expect(page).toHaveURL(/.*q=macmini.*/);

    //To get all svg elements on page
    // const svgAllElement: Locator[] = await page.locator('svg').all();
    // console.log(svgAllElement);
    // for(let svgElement in svgAllElement){
    // console.log(svgElement)
    // }
    const firstResult: Locator = page.locator('//div[contains (@data-id, "CPU")]/div/a[2]');

await expect(firstResult.first()).toBeVisible({ timeout: 15000 });
//To display all the items on page:
const titlesResults: Locator = page.locator("//div[contains (@data-id, 'CPU') or contains (@data-id, 'MP')]/div/a[2]");

const count: number = await titlesResults.count(); 
console.log(`Total products found: ${count}`);

for (let i = 0; i < count; i++) {

const title: string | null = await titlesResults.nth(i).textContent();

console.log(title?.trim());

}

await page.waitForTimeout(5000); 
  });
});