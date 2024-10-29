const searchAction=require("../pages/search/searchAction");
const addToCartAction=require("../pages/addToCart/addToCartAction");
const CheckOutAction= require("../pages/checkout/checkOutAction");
const utility = require("../utility/utility");
const productName = "Nike react phantom run flyknit 2";
var qty;
var singleProductPrice;

const checkOutAction = require("../pages/checkout/checkOutAction");
describe("Demo evershop site automation", () => {
    it("Should be able to Search", async()=>{
        await searchAction.clickOnSearchIcon();
        await searchAction.enterSearchItemName(productName);
        await browser.keys("Enter");
    });
    it("Should be able to Add Product", async()=>{
        await addToCartAction.clickOnProductFromList(productName);
        await addToCartAction.selectProductSize();
        await addToCartAction.selectProductColor();
        qty = await utility.randomNumber(10,1);
        await addToCartAction.enterProductQty(qty);
        await addToCartAction.clickOnAddToCartButton();
        await addToCartAction.clickOnViewCartButton();
    });

    it("Should successfully verify total amount and grand total amount", async()=>{
        singleProductPrice = await addToCartAction.getSingleProuctPrice();
        const expectedTotalPrice= qty*singleProductPrice;
        const actualSubTotal = await checkOutAction.getSubTotalAmount();
        const actualGrandTotal = await checkOutAction.getGrandTotalAmount();
        expect(expectedTotalPrice).toEqual(actualSubTotal);
        expect(expectedTotalPrice).toEqual(actualGrandTotal);
    });
});
