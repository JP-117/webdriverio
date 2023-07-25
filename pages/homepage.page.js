class Homepage {
   // Page Elements:

   //Logo
   get logo() { return $(".logo[href='https://magento.softwaretestingboard.com/']"); }

   //Header navigation bar options
   get whatsNewMenuItem() { return $(".nav-1 [href='https://magento.softwaretestingboard.com/what-is-new.html']"); }
   get womenMenuItem() { return $(".nav-2 [href='https://magento.softwaretestingboard.com/women.html']"); }
   get menMenuItem() { return $(".nav-3 [href='https://magento.softwaretestingboard.com/men.html']"); }
   get gearMenuItem() { return $(".nav-4 [href='https://magento.softwaretestingboard.com/gear.html']"); }
   get trainingMenuItem() { return $(".nav-5 [href='https://magento.softwaretestingboard.com/training.html']"); }
   get saleMenuItem() { return $(".nav-6 [href='https://magento.softwaretestingboard.com/sale.html']"); }

   //Product Info
   get products() { return $$(".product-item"); }

   // Page Methods:
}

module.exports = new Homepage;