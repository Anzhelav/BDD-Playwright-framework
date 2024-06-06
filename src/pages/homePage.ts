import{expect, Locator, Page, test} from "@playwright/test"

export default class homePage{
    //private base: PlaywrightWrapper
constructor(private page: Page){
    //this.base = new PlaywrightWrapper(page);

}
private locators = {
    loginBtn: this.page.getByRole('button',{name: 'Login'})
    
}
   async clickLoginBtn(){
       await this.locators.loginBtn.click();
   }
   async verifyUserIsLoggedIn(){

  }
}