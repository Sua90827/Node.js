const express = require("express");
const app = express();

const session = require("express-session");
const sessionConfig = require("./config/cookie_session/cookie_session_config");


const bodyParser = require("body-parser");
//app.use(express.json())
app.use(session(sessionConfig.sessionConfig));
app.use(bodyParser.urlencoded({extended : true}));
const router = require("./src/routers/router")(app);

app.use("/", router);

app.set("views", "./src/views");
app.set("view engine","ejs");

app.listen(3000, ()=> {console.log("3000 server restarted")})