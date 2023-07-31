const express = require("express");
const ctrl = require("../../controller/member/member_controller");

const router = express.Router();


router.get("/login", ctrl.login);
router.get("/", ctrl.login_ch);
router.get("/info", ctrl.userInfo);
router.get("/list", ctrl.list);


module.exports = router;