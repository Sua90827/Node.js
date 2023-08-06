const router = require("express").Router();
const memberCtrl = require("../../controller/member_ctrl");
router.get("/login", memberCtrl.loJo.login);
router.post("/login.do", memberCtrl.loJo.loginDo);
router.get("/join", memberCtrl.loJo.join);
router.post("/join.do", memberCtrl.loJo.joinDo);

module.exports=router;