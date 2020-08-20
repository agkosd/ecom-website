const Product = require("../models/product");

exports.shopGet = (req, res, next) => {
  Product.fetchAll((products) => {
    //res.render("shop", { prods: products, docTitle: "Shop", path: "/" });
    res.render("shop/product-list", {
      prods: products,
      docTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCss: true,
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodID = req.params.productId;
  console.log(prodID);
  res.redirect("/");
};

exports.invalid = (req, res, next) => {
  //res.status(404).sendFile(path.join(__dirname,'../','views','404.html'));
  //pug
  res.status(404).render("404", { docTitle: "ERROR", path: "" });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    //res.render("shop", { prods: products, docTitle: "Shop", path: "/" });
    res.render("shop/index", {
      prods: products,
      docTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    docTitle: "My Cart",
  });
};

exports.orders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    docTitle: "My Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    docTitle: "Checkout",
  });
};
