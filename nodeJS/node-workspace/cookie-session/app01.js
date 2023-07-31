const express = require("express");

const cookieParser = require("cookie-parser");
const cookieRouter = require("./src/routers/cookie/cookie_router");

const sessionRouter = require("./src/routers/session/session_router");
const session = require("express-session");
const sessionConfig = require("./config/cookie_session/config");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.set("views","./src/views");
app.set("view engine", "ejs");
app.use( cookieParser("아무노래") );//ctrl에서 signed 설정하면 ""이 값을 토대로 암호화해서 사용자에게 보내주겠다.(value가 암호화된다.) 
app.use("/cookie", cookieRouter); //미들웨어 등록
app.use( session(sessionConfig.sessionConfig));//session을 사용할 때 sessionConfig 설정값?을 사용하겠다.
app.use("/cookie", cookieRouter);
app.use("/session", sessionRouter);

app.listen(3000,()=>{console.log("3000 server has activated")})
