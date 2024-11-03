class SignupLocator{
    get fullNameInputField(){
        return $("//input[@name='full_name']");
    }
    get signupIcon(){
        return $("//a[@href='/account/register']");
    } 
    get profileIcon(){
        return $("//a[@href='/account']");
    }
    
}
module.exports = new SignupLocator();