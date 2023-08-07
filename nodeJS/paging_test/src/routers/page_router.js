const router = require("express").Router();

const pageCtrl = require("../controller/page_controller");

router.get("/", pageCtrl.views.index);
router.get("/list", pageCtrl.views.list);

module.exports= router;