const Product = require("../models/product");

exports.addProductGet = (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  //pug
  res.render("admin/add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
    productCSS: true,
    formsCSS: true,
  });
};

exports.addProductPost = (req, res, next) => {
  //console.log(products);
  //pug
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect("/");
  //res.render("shop", { docTitle: "Shop", prods: products });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      docTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};
