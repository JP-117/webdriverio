class PDP {
   // Page Elements:
   get pageTitle() { return $(".page-title"); }
   get price() { return $(".price-wrapper"); }

   get sizePanel() { return $$(".swatch-attribute.size"); }
   get sizeXs() { return $("#option-label-size-143-item-166"); }
   get sizeS() { return $("#option-label-size-143-item-167"); }
   get sizeM() { return $("#option-label-size-143-item-168"); }
   get sizeL() { return $("#option-label-size-143-item-169"); }
   get sizeXl() { return $("#option-label-size-143-item-170"); }

   get colourPanel() { return $$(".swatch-attribute.color"); }
   get colourBlue() { return $("#option-label-color-93-item-50"); }
   get colourOrange() { return $("#option-label-color-93-item-56"); }
   get colourPink() { return $("#option-label-color-93-item-57"); }

   get addToCardBtn() { return $("#product-addtocart-button"); }
   get basketItems() { return $(".counter-number") }

   // Page Methods:
   async selectSize(size) {
      switch (size) {
         case "XS":
            await this.sizeXs.click();
            break;
         case "S":
            await this.sizeS.click();
            break;
         case "M":
            await this.sizeM.click();
            break;
         case "L":
            await this.sizeL.click();
            break;
         case "XL":
            await this.sizeXl.click();
            break;
      }
   }

   async selectColour(colour) {
      switch (colour) {
         case "Blue":
            await this.colourBlue.click();
            break;
         case "Pink":
            await this.colourPink.click();
            break;
         case "Orange":
            await this.colourOrange.click();
            break;
      }
   }

   async selectOptions(size, colour) {
      await this.selectSize(size);
      await this.selectColour(colour);
   }

   async addToCart() {
      await this.addToCardBtn.click();
      await browser.pause(3000); //Temporary to get around spinner until specific waitUntils are added
   }
}

module.exports = new PDP;