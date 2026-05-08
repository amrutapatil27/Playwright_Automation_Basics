/*Cookies

Cookies are small pieces of data the server stores
 in your browser. They're sent with every request 
 and commonly used for authentication
  (session cookies), user preferences, and tracking
  
*/
import { test, expect } from '@playwright/test';

test("Use or send cookies using Context", async ({ page, context }) => {

await page.goto("https://app.vwo.com/#login"); 

// Read ALL cookies
let cookies = await context.cookies();
await context.addCookies([
{
  name: "session_id",
  value: "fake_session_abc",
  domain: "app.com",
  path: "/"

},

{
  name: "user_role",
  value: "admin",
  domain: "app.com",
  path:
  "/"
}
]),
console.log("Total cookies:", cookies.length);

cookies.forEach(function (cookie) {

         console.log(" " + cookie.name + "=" + cookie.value);
});

await page.waitForTimeout(5000);

});