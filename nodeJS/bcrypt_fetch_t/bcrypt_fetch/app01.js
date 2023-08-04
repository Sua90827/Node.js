const express = require("express");
const bcrypt = require("bcrypt");
const app = express();

app.get("/",(req, res)=>{
    const pwd = "test";
    const changePwd = bcrypt.hashSync(pwd, 10);
    console.log("평문 비밀번호 : ", pwd );
    console.log("변경 비밀번호 : ", changePwd );
    console.log( "비밀번호 비교 : ", pwd == changePwd);
    
    const result = bcrypt.compareSync( pwd ,changePwd );
    console.log( "비밀번호 비교 result : ", result );

    res.send("비밀번호")
});

app.listen(3000, ()=>{console.log("3000연동")})