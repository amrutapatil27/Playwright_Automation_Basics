import {test, expect} from "@playwright/test";
test.describe('Flipkart Assignemnts',() => {
    const URL ='https://www.flipkart.com/';

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });
    //first TC to search macmini and sort Price Low to High and select first item
    test('Search and filter products', async ({ page }) => {
        // test logic
         
          //  await page.locator('span:has-text("✕"), button:has-text("✕")').click({ timeout: 5000 });
            try {
                  await page.getByRole('button', { name: '✕' }).click();
                } catch {}
            // Popup didn't show up, carry on
        
        await page.waitForTimeout(5000);
       // await page.locator('input[name="q"]').fill('macmini');//this shows 2 elements
         await page.getByRole('textbox', { name: 'Search for products, brands and more' }).fill('macmini');
         await page.locator('button[type="submit"] svg').click(); 
          
         
         // Wait for results
         await page.waitForSelector('div[data-id]');
         await page.waitForTimeout(5000);

        await page.getByText('Price -- Low to High').click();
       //More precised is:
       //await page.locator('div.WNv7PR', { hasText: /^Price -- Low to High$/ }).click();
        //The ^ and $ symbols in the regex mean "starts with" and "ends with", ensuring it isolates the exact string perfectly.)
          
        // Wait for sorting to apply and results to load
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(5000);
        //To select first item after sorting
        const firstItemSorted = page.locator('div[data-id]').first();
        // or  Get first product
        // const firstProduct = page.locator("//div[contains(@data-id, 'CPU') or contains(@data-id, 'MPC') ]").first();

        // to bypass dynamic/missing title attributes on Flipkart's desktop list views
        const firstItemName = await firstItemSorted.locator('div').first().innerText();
        // Uses a regular expression to find any element inside the card containing the '₹' character
        const priceFirstItem = firstItemSorted.locator('text=/₹.*/').first();
        const priceText = await priceFirstItem.innerText();
        console.log("Price:"+ priceText);
        console.log("Item name: " + firstItemName);

        // Basic verification assertion to complete verification flow
        expect(firstItemName.toLowerCase()).toContain('mac mini');
    });

});