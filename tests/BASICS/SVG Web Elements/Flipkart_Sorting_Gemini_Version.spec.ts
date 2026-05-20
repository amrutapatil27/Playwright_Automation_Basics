import { test, expect } from "@playwright/test";

test.describe('Flipkart Assignments', () => {
    const URL = 'https://www.flipkart.com/';

    // FIX #1: Correctly opened and CLOSED the beforeEach hook block
    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
        
        // Handle optional login popup if it gets in the way
        try {
            await page.locator('span:has-text("✕"), button:has-text("✕")').click({ timeout: 2000 });
        } catch (e) {
            // Popup didn't show up, carry on
        }
    }); // <-- Brackets closed cleanly here!

    test('Search and filter products', async ({ page }) => {
        // FIX #2 & #4: Target the input box directly and press Enter to execute the search
        const searchInput = page.locator('input[name="q"]');
        await searchInput.waitFor({ state: 'visible' });
        await searchInput.fill('macmini');
        await searchInput.press('Enter'); 

        // Let the search page load and render the sorting filters
        await page.waitForLoadState('networkidle');

        // Apply Precision Filter
        const lowToHighFilter = page.locator('div.WNv7PR', { hasText: /^Price -- Low to High$/ });
        await lowToHighFilter.waitFor({ state: 'visible' });
        await lowToHighFilter.click();
        
        // Wait for the DOM grid to update after sorting
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000); // Small buffer for the UI repaint

        // Select the first item after sorting
        const firstItemSorted = page.locator('div[data-id]').first();
        await firstItemSorted.waitFor({ state: 'visible' });

        // FIX #3: Added 'await' so we get the text string instead of a pending Promise object
        let firstItemName = await firstItemSorted.innerText();
        
        // Extract the price element using the regex selector strategy
        const priceFirstItem = firstItemSorted.locator('text=/₹.*/').first();
        const priceText = await priceFirstItem.innerText();
        
        // Print clean outputs
        console.log("Price: " + priceText);
        console.log("Item name: \n" + firstItemName.split('\n')[0]); // Split grabs just the title line
    });

}); // End of describe block