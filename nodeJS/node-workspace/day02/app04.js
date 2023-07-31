const express = require("express");
const router = require("./routers/test_router04");  // 이 경로로 부터 라우터 가져옴

const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", router);  //  /가 들어오면 라우터로 넘겨줌 
//뒤에 뭐가 들어오든지 상관없이 앞에 /가 들어오면 router에게 위임하겠다는 뜻.(미들웨어 등록)

app.listen(3000,()=>{ console.log("3000 server")});