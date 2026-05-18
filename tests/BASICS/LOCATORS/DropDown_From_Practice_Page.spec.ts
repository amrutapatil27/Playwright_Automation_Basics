//7 may 2026 dropdown selection from practice page assignment
//press ESC button in test script
import { test, expect } from "@playwright/test"; // 1. Corrected package name

test("Select options from Drop Down Box", async ({ page }) => {
  await page.goto("https://app.thetestingacademy.com/playwright"); 
  await page.getByRole('link',{name:'Custom Dropdowns'}).click();
  const myPage=await page.locator('#page-title');
   await expect(myPage).toContainText('Custom dropdown practice');
   
   await page.locator('#lang-trigger').click();
   await page.getByRole('option', { name: 'Python' }).click();
   await page.keyboard.press('Escape');

   await page.locator('#framework-trigger').click();
   await page.getByRole('option',{name:'React'}).click();
   await page.keyboard.press('Escape');

   await page.locator('#experience-trigger').click();
   await page.getByRole('option',{name:'Mid-level (4-6 years)'}).click();
   
   await page.locator('#dropdown-save').click();
   
  const output = page.locator('#dropdown-output');
  await expect(output).toBeVisible();
  await expect(output).toContainText('Python');
  await expect(output).toContainText('React');



   
});