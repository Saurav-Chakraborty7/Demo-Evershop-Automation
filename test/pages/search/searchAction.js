const searchLocator=require("./searchLocator");

class SearchAction{
    async clickOnSearchIcon(){
        await searchLocator.searchIcon.click();
    }
    async enterSearchItemName(productName){
        await searchLocator.searchInputField.setValue(productName);
    }
}
module.exports=new SearchAction();