const express = require("express");
const app = express();
const member = require("./db/memberDAO");

const router = express.Router();

app.set("views", "./views");
app.set("view engine","ejs");

app.use("/", router);// 뒤에 뭐가 들어오든지 상관없이 앞에 /가 들어오면 router에게 위임하겠다는 뜻.(미들웨어 등록)

const router2 = express.Router();
app.use("/board",router2);

router2.get("/index", (req, res)=>{
    res.send("/board/index 연결되었습니다!");
});

router.get("/member/index", (req, res)=>{
    res.render("index");
});

const router3 = express.Router();
app.use("/views", router3);

router3.get("/test1", (req, res)=>{
    console.log(member);
    res.render("test1");
});

router3.get("/test2", (req, res)=>{
    res.render("test2");
});
/*
app.get("/", (req, res)=>{
    res.render("index");
});
*/
app.listen(3000, ()=>{ console.log("3000 port server")});