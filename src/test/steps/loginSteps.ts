import {Given, Then, When, setDefaultTimeout} from "@cucumber/cucumber";
import {chromium, Page, Browser} from "@playwright/test";
import {pageFixture} from "../../hooks/pageFixture";
//importing pages and creating objects to follow POM design model
import LoginPage from "../../pages/loginPage";
import HomePage from "../../pages/homePage";
import * as dotenv from 'dotenv';

//dotenv.config();
//To access base URL
//const BASE_URL: string = process.env.BASE_URL || '';
//console.log("BASE_URL:", BASE_URL);

let loginPage: LoginPage;
let homePage: HomePage;
let page: Page
setDefaultTimeout(60*1000*2);
       
         Given('User navigates to the application', async function () {
          //await pageFixture.page.goto(BASE_URL);
          await pageFixture.page.goto("https://bookcart.azurewebsites.net/");
         });
       
         When('User enter username', async function () {
          loginPage = new LoginPage(pageFixture.page);
          homePage = new HomePage(pageFixture.page);
           await loginPage.enterUsername();
         });

         When('User enter password', async function () {
            await loginPage.enterPassword();
          });
       
       
         When('User clicks on login button', async function () {
           await loginPage.clickLoginButton();
         });
       
   
       
         Then('Verify user is logged in', async function () {
           await homePage.verifyUserIsLoggedIn();
        
         });