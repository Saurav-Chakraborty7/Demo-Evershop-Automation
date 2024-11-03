const signupAction = require("../pages/signup/signupAction");
const loginAction = require("../pages/login/loginAction");
const utility = require("../utility/utility");

var email ="";
var password = ""
var fullname ="";

describe("Demo evershop site Authentication Journey", () => {
    it("Should be able to Register", async()=>{
            await loginAction.clickOnProfileIcon();
            await signupAction.clickOnSignupLink();
            fullname = await utility.generateString(3);
            await signupAction.enterFullName(fullname);
            email = fullname+"@yahoo.com";
            await loginAction.enterEmail(email);
            password = fullname +"S/86";
            await loginAction.enterPassword(password);
            await loginAction.clickOnSubmitButton();
    });

    it.skip("Should be able to Logout", async()=>{
        await signupAction.signupProfileIcon();
        await loginAction.clickOnLogout();
});

    it.skip("Should be able to Login", async()=>{
            await loginAction.clickOnProfileIcon();
            await loginAction.enterEmail(email);
            await loginAction.enterPassword(password);
            await loginAction.clickOnSubmitButton();

    });
});