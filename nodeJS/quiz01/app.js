const express = require("express");
const router = require("./src/routes/common_router");
const router_mem = require("./src/routes/member/member_router");

const app = express();
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", router);
app.use("/member", router_mem);
app.use("/login_check", router_mem);

app.listen(3000,()=>{console.log("3000 server")});