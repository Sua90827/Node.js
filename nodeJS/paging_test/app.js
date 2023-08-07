const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));
const router = require("./src/routers/router")(app);
app.use("/", router);

//app.use("/", (req, res)=> res.send("server started"));

app.set("views", __dirname+"/src/views");
app.set("view engine", "ejs");

app.listen(3000, ()=> {console.log("3000 port server");});