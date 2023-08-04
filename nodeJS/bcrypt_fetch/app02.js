const express = require("express");
const app = express();
console.log("dirname : ", __dirname);//폴더의 위치를 알려줌. 

//app.set("views", "./views");
app.set("views", __dirname+"/views");
app.set("view engine", "ejs");
let cnt = 0;

app.get("/non_fetch", (req, res)=>{
    cnt++;
    console.log(cnt+ "non_fetch 서버 연동");
    res.render("non_fetch",{cnt})
});
app.get("/fetch01", (req, res)=>{
    cnt++;
    console.log(cnt+ "fetch01 서버 연동");
    res.render("fetch01",{cnt}) //res.json("fetch01",{cnt})
});
app.get("/get_count", (req, res)=>{
    cnt++;
    console.log(cnt+ "get_count 서버 연동");
    res.json({aaa : cnt});//페이지를 주는 것이 아니라 데이터(문자열)를 보내줌.
});
app.get("/fetch_count", (req, res)=>{
    res.render("fetch_count")
});
app.get("/rest", (req, res)=>{
    res.render("rest")
});

app.get("/test", (req, res)=>{
    res.json("get 데이터를 요청할 때!!");
});

app.post("/test", (req, res)=>{
    res.json("post 데이터를 추가할 때!!");
});

app.put("/test", (req, res)=>{
    res.json("put 데이터를 수정할 때!!");
});

app.delete("/test", (req, res)=>{
    res.json("delete 데이터를 수정할 때!!");
});

app.listen(3000, ()=>{console.log("3000연동")})