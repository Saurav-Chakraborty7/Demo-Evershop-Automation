const loginLocator = require("./loginLocator");

class LoginAction{
    async clickOnProfileIcon(){
        await loginLocator.profileIcon.click();
    }
    async enterEmail(email){
        await loginLocator.loginEmailInput.setValue(email);
    }
    async enterPassword(password){
        await loginLocator.loginPasswordInput.setValue(password);
    }
    async clickOnSubmitButton(){
        await loginLocator.buttonLogin.click();
    }
    async clickOnLogout(){
        await loginLocator.logoutLink.click();
    }

}
module.exports = new LoginAction();