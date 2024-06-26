// A lot of functions: actions in all of our files
import {BeforeAll, Before, After, AfterAll, BeforeStep, AfterStep, Status} from "@cucumber/cucumber";
import {chromium, Page, Browser, BrowserContext} from "@playwright/test";
import { pageFixture} from "./pageFixture";


let browser: Browser;
let context: BrowserContext;

BeforeAll(async function(){
    browser = await chromium.launch({headless:false}); 

});
Before(async function(){
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
});

After(async function({pickle, result}){ //pickle will give some meta information about this scenario
    //to make a screenshot
    console.log(result?.status);
    if(result?.status == Status.FAILED){
        const img = await pageFixture.page.screenshot({path:`./test-result/screenshots${pickle.name}.png`, type: "png"})
        await this.attach(img, "image/png"); 
    }
   await pageFixture.page.close();
   await context.close();
});

AfterAll(async function(){
   await browser.close();
});