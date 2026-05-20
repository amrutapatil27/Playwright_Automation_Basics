// Go to https://simplemaps.com/svg/country/in 
// and print all the class names of the states and click on the UP.  

import{test,expect} from '@playwright/test';

test('Advance SVG Project',async({page})=>{

    await page.goto('https://simplemaps.com/svg/country/in');

    // Print all classnames of the states and click on the UP.
    let allStates = await page.locator('path').all();   
    for (const state of allStates) {
        const className = await state.getAttribute('class');
        if(className){ // checks if className is not null
            console.log(className);
        
         if(className.endsWith('UP')){ // checks if stateEnd ends with 'UP'
         await state.click();   
         console.log("Clicked on UP");       
     }  
    }
} 

 // Prints all the names of states
     let allStateNames = await page.locator('text tspan').all();
        for(const stateName of allStateNames){
            const name = await stateName.textContent();
            console.log(name);
        }
        
    await page.waitForTimeout(5000);
});
/*import {test,expect} from "@playwright/test";
test('Find the state from svg map',async ({page}) => {
   let  URL ='https://simplemaps.com/svg/country/in';
   await page.goto(URL);
   let statesLocator= await page.locator('svg>path').all();
   for (let myState of statesLocator){
        let  stateName=myState.allTextContents();
       if (stateName includes('UP')){
        console.log("State name: " +myState.allInnerTexts());
       }
   }

});
*/