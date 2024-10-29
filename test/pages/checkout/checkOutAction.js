const checkOutLocator = require("./checkOutLocator");
const utility = require("../../utility/utility");
class CheckOutAction{
    async getSubTotalAmount(){
        const subTotal = await checkOutLocator.subTotal.getText();
        const subTotalNumber = await utility.convertTextToNumber(subTotal);
        return subTotalNumber;
    }
    async getGrandTotalAmount(){
        const grandTotal= await checkOutLocator.subTotal.getText();
        const grandTotalNumber = await utility.convertTextToNumber(grandTotal);
        return grandTotalNumber;
    }
    async clickOnCheckoutButton(){
        await checkOutLocator.checkOutButton.click();
    }
}
module.exports = new CheckOutAction();