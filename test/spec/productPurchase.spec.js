const searchAction=require("../pages/search/searchAction");
const addToCartAction=require("../pages/addToCart/addToCartAction");
const productName = "Nike react phantom run flyknit 2";
const qty=2;
describe("Demo evershop site automation", () => {
    it("Shoudle be able to Search", async()=>{
        await searchAction.clickOnSearchIcon();
        await searchAction.enterSearchItemName(productName);
        await browser.keys("Enter");
    });
    it("Shoudle be able to Add Product", async()=>{
        await addToCartAction.clickOnProductFromList(productName);
        await addToCartAction.selectProductSize();
        await addToCartAction.selectProductColor();
        await addToCartAction.enterProductQty(qty);
        await addToCartAction.clickOnAddToCartButton();
        await addToCartAction.clickOnViewCartButton();
    });
});
