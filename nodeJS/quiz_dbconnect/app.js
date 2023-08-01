const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//app.use(express.json())

app.use(bodyParser.urlencoded({extended : true}));
const router = require("./src/routers/router")(app);

app.use("/", router);

app.set("views", "./src/views");
app.set("view engine","ejs");

app.listen(3000, ()=> {console.log("3000 server restarted")})