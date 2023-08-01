const router = require("express").Router();
const memberCtrl = require("../../controller/member_ctrl");
router.get("/login", memberCtrl.login);
router.get("/join", memberCtrl.join);
router.post("/join.do", memberCtrl.joinDo);
module.exports=router;