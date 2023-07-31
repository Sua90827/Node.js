// const router = require("express").Router();

// router.get("/", (req, res)=>{
//     res.send("기본 경로 연동");
// })

// module.exports=router;



module.exports=(app)=>{
    const memberRouter = require("./member/member_router");
    app.use("/member", memberRouter);

    const router = require("express").Router();

    router.get("/", (req, res)=>{
        //res.send("기본 경로 연동111");
        res.render("index");
    })
    return router;
};