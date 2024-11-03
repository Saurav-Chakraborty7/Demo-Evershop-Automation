class LoginLocator{
        get profileIcon(){
            return $("//a[@href='/account/login']");
        }
        get loginEmailInput(){
            return $("//input[@placeholder='Email']");
        }
        get loginPasswordInput(){
            return $("//input[@placeholder='Password']");
        }
        get buttonLogin(){
            return $("//button[@type='submit']");
        }
        get logoutLink(){
            return $("//a[contains(text(),'Logout')]");
        }

}
module.exports = new LoginLocator();