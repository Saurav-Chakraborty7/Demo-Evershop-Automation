const signupLocator = require("./signupLocator");

class SignupAction{
    async enterFullName(fullName){
        await signupLocator.fullNameInputField.setValue(fullName);
    }
    async clickOnSignupLink(){
        await signupLocator.signupIcon.click();
    }
    async signupProfileIcon(){
        await signupLocator.profileIcon.click();
    }
    
}
module.exports = new SignupAction();