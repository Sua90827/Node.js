const router = require("express").Router();
const memberCtrl = require("../../controller/member/member_ctrl");
router.get("/login", memberCtrl.login );
router.post("/login_check", memberCtrl.loginCheck );
router.get("/logout", memberCtrl.logout );
router.get("/list", memberCtrl.memberList );
router.get("/register_view", memberCtrl.registerView );
router.post("/register", memberCtrl.register );
router.get("/member_info/:id", memberCtrl.getMember );
router.get("/delete/:id", memberCtrl.memberDelete );
router.get("/modify/:id", memberCtrl.memberModifyView );
router.post("/modify", memberCtrl.memberModify );

module.exports = router;
