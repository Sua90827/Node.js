const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
app.get("/", (req, res)=>{
    const pwd = "test";
    const changePwd = bcrypt.hashSync(pwd, 10);//숫자가 높아질 수록 복잡한 암호화가 진행된다. 솔트값. 너무 높으면 처리 속도가 느림.
    console.log("평문 비밀번호 : ", pwd);
    console.log("변경 비밀번호 : ", changePwd);
    const result = bcrypt.compareSync(pwd, changePwd);//평문, 암호화된 비번 순서로 적어줘야 함.
    console.log("비밀번호 비교 result : ", result);
    res.send("비밀번호")
});

app.listen(3000, ()=>{console.log("3000연동")})