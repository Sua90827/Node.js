const express = require("express");
const ctrl = require("../../controller/cookie/cookie_ctrl");
const router = express.Router();

router.get("/", ctrl.index);
router.get("/popup", ctrl.popup);
router.get("/quiz", ctrl.quiz);
router.get("/quiz_popup", ctrl.quizPopup);
router.get("/makeCookie", ctrl.makeCookie);

router.get("/cart", ctrl.cart);
router.get("/save1", ctrl.save1);
router.get("/save2/:goods", ctrl.save2); 
//?가 아닌, /로 값을 가져오는 경우에는 /:변수를 써준다. 변수에 넘어온 값이 저장된다.
router.get("/view_list", ctrl.viewList);
module.exports=router;
