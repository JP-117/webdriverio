const homepage = require("../pages/homepage.page");

describe("Homepage @critical", () => {
   it("checks the brand logo is displayed ", async () => {
      await expect(await homepage.logo).toBeDisplayed();
   });
   describe("Header", () => {
      it("checks the 'What's New' menu item is displayed", async () => {
         await expect(await homepage.whatsNewMenuItem).toBeDisplayed();
      });
      it("checks the 'Women' menu item is displayed", async () => {
         await expect(await homepage.womenMenuItem).toBeDisplayed();
      });
      it("checks the 'Men' menu item is displayed", async () => {
         await expect(await homepage.menMenuItem).toBeDisplayed();
      });
      it("checks the 'Training' menu item is displayed", async () => {
         await expect(await homepage.trainingMenuItem).toBeDisplayed();
      });
      it("checks the 'Gear' menu item is displayed", async () => {
         await expect(await homepage.gearMenuItem).toBeDisplayed();
      });
      it("checks the 'Sale' menu item is displayed", async () => {
         await expect(await homepage.saleMenuItem).toBeDisplayed();
      });
   });
   describe("Products", () => {
      it("checks we display 4 or more products", async () => {
         await expect(await homepage.products.length).toBeGreaterThanOrEqual(4);
      });
   });
});