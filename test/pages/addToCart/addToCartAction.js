const addToCartLocator=require("./addToCartLocator");
const utility = require("../../utility/utility");
class AddToCartAction{
    async clickOnProductFromList (productName){
        await addToCartLocator.productFromList(productName).click();
    }
    async selectProductSize(){
        await addToCartLocator.productSize.click();
        await browser.pause(3000);
    }
    async selectProductColor(){
        await addToCartLocator.productColor.click();
        await browser.pause(3000);    
    }
    async enterProductQty(qty){
        await addToCartLocator.inputQtyField.setValue(qty);
    }
    async clickOnAddToCartButton(){
        await addToCartLocator.buttonAddToCart.click();
    }
    async clickOnViewCartButton(){
        await addToCartLocator.buttonViewCartFrom.click();
    }
    async getSingleProuctPrice(){
        const productPrice = await addToCartLocator.PriceFromproductPage.getText();
        const productPriceIntoNumber = await utility.convertTextToNumber(productPrice);
        return productPriceIntoNumber;
    }

}
module.exports = new AddToCartAction();