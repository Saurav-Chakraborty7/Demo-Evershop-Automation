class CheckOutLocator{
    get subTotal(){
        return $("//div[contains(text(),'Sub total')]/following-sibling::div");
    }
    get grandTotal(){
        return $("//div[@class='grand-total-value']");
    }
    get checkOutButton(){
        return $("(//a[contains(text(), checkout)])[13]");
    }
}
module.exports = new CheckOutLocator();