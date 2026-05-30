//Writing interface to read csv file which is
// easy for test script to read and understand
//This will read data from login-data.csv file
// first create a login.data.csv file which has
//proper test data
import { test, expect } from '@playwright/test';
import { readCSV } from './csvUtil'; // Import our clean function

// Load our data array instantly
const testRecords = readCSV('./test-data/users.csv');

// Dynamically generate a fresh test for EVERY row inside your CSV file!
for (const record of testRecords) {
  test(`Data-Driven Login Test for User: ${record.username}`, async ({ page }) => {
    await page.goto('https://example.com/login');
    
    // Fill values naturally using the column header names
    await page.fill('#username', record.username);
    await page.fill('#password', record.password);
    await page.click('#submit-btn');
    
    // If you included a 'role' column, you can assert against it!
    await expect(page.locator('#user-role-badge')).toHaveText(record.role);
  });
}