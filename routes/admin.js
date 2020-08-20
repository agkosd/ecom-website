const express = require("express");
const router = express.Router();

const adminController = require("../controller/admin");

router.get("/add-product", adminController.addProductGet);

router.post("/add-product", adminController.addProductPost);

router.get("/products", adminController.getProducts);

module.exports.routes = router;
