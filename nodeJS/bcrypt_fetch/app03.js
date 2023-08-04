const express = require("express");
const app = express();
let members = [
    {id:"aaaa", pwd:"aaa", name:"홍길동", addr:"산골짜기"},
    {id:"aaaaaa", pwd:"bbb", name:"김개똥", addr:"개똥별"},
    {id:"aaaaaaaa", pwd:"ccc", name:"고길똥", addr:"마포구"},
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
    console.log(members);
    res.json(members);
})
app.get("/search", (req, res)=>{
    console.log(req.query);
    res.json( members.filter(mem=>mem.id === req.query.id));
    
})
app.get("/search/:id", (req, res)=>{
    console.log(req.params);
    res.json( members.filter(mem=>mem.id === req.params.id));
    
})
app.get("/register_view", (req, res)=>{
    res.render("register_view");
})

// app.post("/checkId", (req, res) => {
//     let cnt = 0;
//     members.forEach(a => {
//         if(req.body.id == a.id){
//             cnt++;
//         }
//     });
//     if(cnt === 1){
//         cnt = 0;
//         res.json(1);
//     }else{
//         res.json(0);
//     }
    
// })

app.get("/checkId", (req, res) => {
    let cnt = 0;
    members.forEach(a => {
        if(req.query.id == a.id){
            cnt++;
        }
    });
    if(cnt === 1){
        cnt = 0;
        res.json(1);
    }else{
        res.json(0);
    }
    
})

let data= [
    { id: "aaa", pwd: "aaa", name: "홍길동", addr: "산골짜기" },
    { id: "bbb", pwd: "bbb", name: "김개똥", addr: "개똥별" },
    { id: "ccc", pwd: "ccc", name: "고길똥", addr: "마포구" },
    { id: "ddd", pwd: "ddd", name: "박길동", addr: "서울시" },
    { id: "eee", pwd: "eee", name: "이순신", addr: "해남" },
    { id: "fff", pwd: "fff", name: "장보고", addr: "전라도" },
    { id: "ggg", pwd: "ggg", name: "김철수", addr: "경기도" },
    { id: "hhh", pwd: "hhh", name: "이영희", addr: "충청도" },
    { id: "iii", pwd: "iii", name: "최미영", addr: "강원도" },
    { id: "jjj", pwd: "jjj", name: "홍길자", addr: "대구" },
    { id: "kkk", pwd: "kkk", name: "김철호", addr: "인천" },
    { id: "lll", pwd: "lll", name: "송미정", addr: "울산" },
    { id: "mmm", pwd: "mmm", name: "정민우", addr: "경북" },
    { id: "nnn", pwd: "nnn", name: "이민호", addr: "경남" },
    { id: "ooo", pwd: "ooo", name: "박지성", addr: "전북" },
    { id: "ppp", pwd: "ppp", name: "손흥민", addr: "전남" },
    { id: "qqq", pwd: "qqq", name: "김연아", addr: "제주" },
    { id: "rrr", pwd: "rrr", name: "유재석", addr: "강남" },
    { id: "sss", pwd: "sss", name: "이승기", addr: "강북" },
    { id: "ttt", pwd: "ttt", name: "김태희", addr: "홍대" }
  ];
app.get("/view_member", (req, res)=>{
    res.render("view_member");
});

app.get("/more", (req, res)=>{
    res.json(data);
})

app.listen(3000, ()=>{console.log("3000연동")})