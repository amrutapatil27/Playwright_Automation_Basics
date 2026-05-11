Getting started with Allure Playwright
2nd MAy 2026 Promod dutta class

Make sure Node.js is installed.

Make sure that you run this command from the parent Playwright folder,which you created for project

> npm install --save-dev @playwright/test allure-playwright

In the playwright.config.ts file, add this line ["allure-playwright"]
// reports: [['html'],['allure-playwright']],

Check Configuration with this command-
> npx playwright test
_____________________________________________
In the test script you need to add following code lines:
These are helpful to sort them as per epic, feature etc.  

>import * as allure from "allure-js-commons";

>await allure.epic("VWO Login Tests");

>await allure.description("Verify that the login page works")

>await allure.feature ("Essential features");

>await allure.story ("Authentication");
________________________________________________
Go to the Terminal

>export ALLURE_LABEL_epic=WebInterface (for mac machine)
>$env:ALLURE_LABEL_epic="WebInterface" (for windows machine)

npx playwright test tests/05_Allure_Reporting/230_Login.spec.ts

If you want to be able to type allure in any folder on your computer without npx, install it globally.
>npm install -g allure-commandline

To see the report run following commnad in terminal
> allure serve allure-results

Allure report will open now in default browser
Click on Suits to see the test cases results


