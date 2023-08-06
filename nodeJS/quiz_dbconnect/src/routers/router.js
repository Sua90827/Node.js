module.exports=(app)=>{
    const memberRouter = require("./member/member_router");
    app.use("/member", memberRouter);

    const router = require("express").Router();

    router.get("/", (req, res)=>{
        if(req.session.sua){
            res.cookie("isLogin",true);
        }
        res.render("index", {username : req.session});
    })
    return router;
}