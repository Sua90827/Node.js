const router = require("express").Router();
const memberCtrl = require("../../controller/member_ctrl");
router.get("/login", memberCtrl.login);
router.post("/login_check", memberCtrl.loginCheck);
router.get("/logout", memberCtrl.logout);
router.get("/list", memberCtrl.list);
router.get("/join", memberCtrl.join);
router.post("/join.do", memberCtrl.joinDo);
module.exports=router;