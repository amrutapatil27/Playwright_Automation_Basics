// 30 May 2026
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
//Gemini Version code

// 1. Create a function that loops 500 times to build your dataset
function generateFiveHundredUsers() {
    // FIX: This freezes the randomizer so the titles never change between phases!
  faker.seed(123);
  const users = [];
  
  for (let i = 0; i < 10; i++) { // 10 tests will run paralle. You can change value to 500
    users.push({
      id: i + 1,
      name: faker.person.fullName(),       // Generates "John Smith"
      email: faker.internet.email(),       // Generates "john.smith@gmail.com"
      password: faker.internet.password(), // Generates a random secure password
    });
  }
  
  return users; // This returns an array containing 500 unique user objects
}

// 2. Store the generated data in a variable
const testDataset = generateFiveHundredUsers();

// 3. (Optional) Run your Playwright tests using the data
test.describe('Bulk User Validation Data Loop', () => {
  
  // Example: Slicing to just use the first few for a quick UI check, 
  // or you can loop through all of them for API batches!
  const sampleData = testDataset.slice(0, 5); 

  for (const user of sampleData) {
    test(`Testing form input for user: ${user.name}`, async ({ page }) => {
      await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
      
      await page.getByRole("textbox", { name: "Username" }).fill(user.name);
      await page.getByRole("textbox", { name: "Password" }).fill(user.password);
      
      // Your test assertions here...
    });
  }
});