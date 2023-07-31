const express = require("express");
const ctrl = require("../controller/test_controller");

const router = express.Router();

router.get("/", ctrl.index); //index함수
router.get("/test1", ctrl.t1);
router.get("/test2", ctrl.t2);
    

module.exports = router; //라우터를 내보내겠다.