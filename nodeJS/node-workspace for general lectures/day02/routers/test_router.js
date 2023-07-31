const express = require("express");
const member = require("../db/memberDAO");
const router = express.Router();

router.get("/", (req, res)=>{
    console.log("DBMember : ", member);
    res.render("index");
});

router.get("/test1", (req, res)=> {
    res.render("test1");
});

router.get("/test2", (req, res)=>{
    res.render("test2");
})

module.exports = router; //라우터를 내보내겠다.