const addToCartLocator=require("./addToCartLocator");
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

}
module.exports = new AddToCartAction();