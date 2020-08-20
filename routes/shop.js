const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

const shopController = require("../controller/shop");

router.get("/", shopController.getIndex);

router.get("/products", shopController.shopGet);

router.get("/products/:productId", shopController.getProduct);

router.get("/cart", shopController.getCart);

router.get("checkout", shopController.getCheckout);

router.get("/orders", shopController.orders);

module.exports = router;
