import {Given, Then, When, setDefaultTimeout} from "@cucumber/cucumber";
import {chromium, Page, Browser} from "@playwright/test";
import {pageFixture} from "../../hooks/pageFixture";
//importing pages and creating objects to follow POM design model
import LoginPage from "../../pages/loginPage";
import HomePage from "../../pages/homePage";

let loginPage: LoginPage;
let homePage: HomePage;
let page: Page
setDefaultTimeout(60*1000*2);
    
Given('User clicks on login link', async function () {
    loginPage = new LoginPage(pageFixture.page);
    homePage = new HomePage(pageFixture.page);
    await homePage.clickLoginBtn(); 
 });