const express = require("express");
const ctrl = require("../controller/common_controller");

const router = express.Router();

router.get("/", ctrl.index);

module.exports = router;