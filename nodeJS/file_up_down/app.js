const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));
const router = require("./src/routers/router")(app);

app.set("views", __dirname+"/src/views");
app.set("view engine", "ejs");

app.use("/", router);
app.use("/static", express.static(__dirname+"/public"));//고정적인 , 해당경로에 저장하겠다.

//app.get("/", (req, res)=>{ res.send("기본 연결")})
app.listen(3000, ()=>{console.log("3000서버 연결")})