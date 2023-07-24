const homepage = require("../pages/homepage.page");

describe("Homepage @critical", () => {
   it("checks the brand logo is displayed ", async () => {
      await expect(await homepage.logo).toBeDisplayed();
   });
});