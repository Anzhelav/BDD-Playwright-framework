import{expect, Locator, Page, test} from "@playwright/test"

export default class loginPage{
    
constructor(private page: Page){

}
  private locators = {
    userNameField: this.page.locator('#stripes-258705529'),
    passwordField: this.page.locator('input[name="password"]'),
    loginInBtn: this.page.locator('input[name="signon')
    }

  async enterUsername(){
    await this.locators.userNameField.fill('AAAA');

  }
  async enterPassword(){
    await this.locators.passwordField.fill('Aaaaa');
    }
  async clickLoginButton(){
    await this.locators.loginInBtn.click();

  }
}