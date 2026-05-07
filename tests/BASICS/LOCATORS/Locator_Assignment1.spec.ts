/* 
1. https://katalon-demo-cura.herokuapp.com/

2. On the "Make Appointment" page, you will be asked to enter your username and password.

3. https://katalon-demo-cura.herokuapp.com/#appointment We need to verify that the URL has now changed to this and 
page contains Make appointment label

make appointment id:btn-make-appointment
Login page link:https://katalon-demo-cura.herokuapp.com/profile.php#login
username id: txt-username (John Doe)
password id: txt-password (ThisIsNotAPassword)
login button: btn-login


*/
import { test,expect } from "@playwright/test";
test("locators Assignment", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
     let makeAppBtn = page.locator("#btn-make-appointment");
     await makeAppBtn.isVisible();
     await makeAppBtn.click();
     await expect(page).toHaveTitle("CURA Healthcare Service");
    let userName=page.locator("#txt-username");
    let passWord=page.locator("#txt-password");
    let loginBtn = page.locator("#btn-login");
    await userName.fill("John Doe");
    await passWord.fill("ThisIsNotAPassword");
    await loginBtn.click();
    console.log("Login should be done");
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");

});
