import {test,expect} from "@playwright/test";
//import { link } from "node:fs";
//import dayjs from 'dayjs';
test("Enter data in QA Form",async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/");
    // 1. Locate the card container first
const qaCard = page.locator('article.index-card').filter({ hasText: 'QA Profile Form' });

// 2. Click the link within that specific card
await qaCard.getByRole('link', { name: 'Open page' }).click();
    // ✅ Best Practice (User-Centric)
const heading = page.getByRole('heading', { name: /QA.*Profile Form/i });
expect (heading).toHaveText("QA Profile Form practice");

await page.getByTestId('first-name').fill("Amruta");
await page.getByTestId('last-name').fill("Patil");
await page.getByTestId('gender-female').check();
await page.getByTestId('years-experience').selectOption('4');
// 1. Create the date object
const date = new Date();

// 2. Format to YYYY-MM-DD
// .toISOString() gives: "2026-05-13T14:59:06.000Z"
// .split('T')[0] gives: "2026-05-13"
const todayString = date.toISOString().split('T')[0];
//Date can be selected using dayjs also. its easier
//const today = dayjs().format('YYYY-MM-DD'); 
//await page.getByTestId('profile-date').fill(today);

// 3. Now fill it (This will work!)
await page.getByTestId('profile-date').fill(todayString);
await page.getByTestId('profession-automation').click();
await page.getByTestId('tool-uft').check();
const continentsToSelect = ['asia', 'europe', 'australia'];

for (const continent of continentsToSelect) {
  // We use string interpolation to build the ID dynamically
  await page.getByTestId(`continent-${continent}`).check();
}
// Verify that Asia is actually checked
await expect(page.getByTestId('continent-asia')).toBeChecked();
await page.getByTestId('profile-submit').click();

});
