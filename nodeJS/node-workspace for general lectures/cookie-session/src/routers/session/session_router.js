const express = require("express");
const ctrl = require("../../controller/session/session_ctrl");
const router = express.Router();

router.get("/", ctrl.index);

router.get("/set_session", ctrl.setSession);
router.get("/get_session", ctrl.getSession);
router.get("/del_session", ctrl.delSession);

router.get("/login", ctrl.login);
router.use("/login_check", ctrl.login_check);

router.get("/success", ctrl.success);
router.get("/logout", ctrl.logout);
module.exports = router;