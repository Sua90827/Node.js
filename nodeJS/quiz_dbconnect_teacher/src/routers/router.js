module.exports=(app)=>{
    const memberRouter = require("./member/member_router");

    app.use("/member", memberRouter);

    const router = require("express").Router();

    router.get("/", (req, res)=>{
        if(req.session.username){ //기본 경로를 요청할 때 로그인이 되어 있다면, 여기서 쿠키를 만들겠다
            res.cookie("isLogin",true);
        }
        res.render("index", {username : req.session.username});

    })
    return router;
}