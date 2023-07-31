const router = require("express").Router();
const memberCtrl = require("../../controller/member/member_ctrl");
router.get("/", (req, res)=>{
    console.log("/member 연동");
    res.send("/member연동");
})
router.get("/list", memberCtrl.list);
router.get("/register_form", memberCtrl.registerForm);
router.post("/register", memberCtrl.register);
router.get("/member_view/:id", memberCtrl.memberView); // 경로처럼 값을 넘겨줄 때.
router.get("/modify_form", memberCtrl.modifyForm); //?를 이용해서 값을 넘겨줄 때.
router.post("/modify", memberCtrl.modify);
router.get("/delete/:id", memberCtrl.deleteMember);
module.exports=router;