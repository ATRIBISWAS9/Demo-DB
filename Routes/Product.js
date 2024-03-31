const express = require("express");
const router = express.Router();

const getAllProducts = require("../Controllers/Products");

router.route("/").get(getAllProducts);

module.exports = router;