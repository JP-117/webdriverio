const pdp = require("../pages/pdp.page");

describe("Product Display Page (PDP) @critical", () => {
   before(async function () {
      await browser.url('/radiant-tee.html')
   });
   it("checks the product title is displayed", async () => {
      await expect(await pdp.pageTitle).toBeDisplayed();
      await expect(await pdp.pageTitle).toHaveTextContaining("Radiant Tee");
   });
   it("checks the price is displayed", async () => {
      await expect(await pdp.price).toBeDisplayed();
   });
   it("checks the correct currency symbol is displayed", async () => {
      await expect(await pdp.price).toHaveTextContaining("$");
   });
   it("checks the size panel is displayed", async () => {
      await expect(await pdp.sizePanel).toBeDisplayed();
   });
   it("checks the XS size is displayed", async () => {
      await expect(await pdp.sizeXs).toBeDisplayed();
      await expect(await pdp.sizeXs).toHaveTextContaining("XS");
   });
   it("checks the S size is displayed", async () => {
      await expect(await pdp.sizeS).toBeDisplayed();
      await expect(await pdp.sizeS).toHaveTextContaining("S");
   });
   it("checks the M size is displayed", async () => {
      await expect(await pdp.sizeM).toBeDisplayed();
      await expect(await pdp.sizeM).toHaveTextContaining("M");
   });
   it("checks the L size is displayed", async () => {
      await expect(await pdp.sizeL).toBeDisplayed();
      await expect(await pdp.sizeL).toHaveTextContaining("L");
   });
   it("checks the XL size is displayed", async () => {
      await expect(await pdp.sizeXl).toBeDisplayed();
      await expect(await pdp.sizeXl).toHaveTextContaining("XL");
   });
   it("checks the add to card button is displayed", async () => {
      await expect(await pdp.addToCardBtn).toBeDisplayed();
   });
   it("selects size and colour and proceeds to basket page", async () => {
      await pdp.selectOptions(size = "S", colour = "Blue");
      await pdp.addToCart();
      await expect(await pdp.basketItems).toHaveTextContaining("1");
   });
});