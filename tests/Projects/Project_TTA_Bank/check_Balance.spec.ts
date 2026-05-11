import { test, expect } from '@playwright/test';

test('Banking Transfer Test', async ({ page }) => {
  // 1. Setup and Login
  await page.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.getByPlaceholder('John Doe').fill('Promod');
  await page.getByPlaceholder('you@example.com').fill('test@example.com');
  await page.getByPlaceholder('••••••••').fill('admin');
  await page.getByRole("button", { name: "Create Account" }).click();

  // 2. CAPTURE INITIAL BALANCE
  // We use the 'text-3xl' class to target the main balance heading specifically
  const rawAmount = await page.locator('h3.text-3xl').innerText();
  const initialAmount: number = parseFloat(rawAmount.replace(/[$,]/g, ""));
  
  console.log("Initial Balance captured:", initialAmount);

  // 3. PERFORM TRANSFER
  await page.getByRole("button", { name: "Transfer Funds" }).click();
  await page.getByPlaceholder('0.00').fill('5000');

  await page.getByPlaceholder('e.g. Rent for October').fill('Rent for May 2026');
   // Calculate what the balance SHOULD be
  const expectedBalance: number = initialAmount - 5000;
  console.log("Expected Balance should be:", expectedBalance);
  // Clicking the 'Transfer' button inside the form to submit
  
  await page.getByRole("button", {name:"Continue"}).click();
  await page.getByRole("button",{name:"Confirm Transfer"}).click();
  await page.getByRole("button",{name:"Dashboard"}).click();
 

  // 4. CAPTURE NEW BALANCE & COMPARE
  // We re-locate the same 3xl heading to get the updated UI value
  const newRawAmount = await page.locator('h3.text-3xl').innerText();
  console.log("New amount is: "+ newRawAmount);
  const actualNewBalance: number = parseFloat(newRawAmount.replace(/[$,]/g, ""));
console.log("New balance is: "+ actualNewBalance);
  console.log("Actual Balance in UI after transfer:", actualNewBalance);

  // Verification
  //expect(actualNewBalance).toBe(expectedBalance);
  await expect(page.locator('h3.text-3xl')).toHaveText('$45,000.00');
});

// create custom report using video