const express = require("express");
const app = express();
let members = [
    {id:"aaa", pwd:"aaa", name:"홍길동", addr:"산골짜기"},
    {id:"bbb", pwd:"bbb", name:"김개똥", addr:"개똥별"},
    {id:"ccc", pwd:"ccc", name:"고길똥", addr:"마포구"},
];

app.set("views", __dirname+"/views");
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("index")
});
app.get("/get_members",(req, res)=>{
    res.json(members);//페이지를 주는 것이 아니라 데이터를 보내줌.
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.post("/register", (req, res)=>{
    console.log(req.body);
    members=members.concat(req.body);
    console.log(members);
    res.json(1);
})

app.delete("/delete", (req, res)=>{
    console.log(req.body);
    members = members.filter(mem=>mem.id !== req.body.id);
    res.json(1);
})
app.get("/search", (req, res)=>{
    console.log(req.query);
    res.json( members.filter(mem=>mem.id === req.query.id));
    
})
app.get("/search/:id", (req, res)=>{
    console.log(req.params);
    res.json( members.filter(mem=>mem.id === req.params.id));
    
})

app.listen(3000, ()=>{console.log("3000연동")})