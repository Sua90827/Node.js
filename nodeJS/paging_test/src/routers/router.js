module.exports=(app)=>{
    const pageRouter = require("./page_router");
    app.use("/page", pageRouter);

    const router = require("express").Router();
    router.get("/", (req, res)=>{
        const msg = `<h3>기본 페이지입니다.</h3>
        <a href="/page">page_index</a>`;
        res.send(msg);
    })
    return router;
}