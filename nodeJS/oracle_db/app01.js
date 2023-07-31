const express = require("express");
const app = express();
let con;
app.get("/", (req,res)=>{
    console.log("1.연동전");
    con = connect();
    con.then(()=>{
        res.send("con=>"+msg);
    });
    console.log("3.연동 완료 후 특정기능 사용");
});

app.get("/async", async (req,res)=>{//비동기
    console.log("1.연동전.async");
    con = await connect();//비동기, await 는 then이랑 비슷.
    console.log("3.연동 완료 후 특정기능 사용");
    res.send("con=>"+con);
    });


const connect = () =>{
    let msg;
    return new Promise((resolve)=>setTimeout(()=> {
        msg ="DB연동 되었습니다!!!";
        console.log("2.DB연동하는 중...");
        resolve(msg);//값을 전달할 때 사용
    }, 1000));//1번, 3번, 1초 후에 2번 출력
    //return msg;
}
app.listen(3000, ()=>{ console.log("3000 서버 실행"); });