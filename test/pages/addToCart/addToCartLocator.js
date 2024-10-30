class AddToCartLocator{
     productFromList(productName){
        return $(`//a[contains(@href,'182')]/span[contains(text(),'${productName}')]`);
    }
    get productSize(){
        return $("//a[@href='#' and contains(text(),'S')]");
    }
    get productColor(){
        return $("//a[@href='#' and contains(text(),'Black')]");
    }
    get inputQtyField(){
        return $("//input[@name='qty']");
    }
    get buttonAddToCart(){
        return $("//button[contains(.,'ADD TO CART')]");
    }
    get buttonViewCartFrom(){
        return $("//a[@class='add-cart-popup-button']");
    }
    get PriceFromproductPage(){
        return $("//span[@class='sale-price']");
    }
}

module.exports = new AddToCartLocator();