const express = require("express");
const path = require("path");
const router = express.Router();

const controller = require('../controller/shop');

router.use("/",controller.invalid );

module.exports = router;
