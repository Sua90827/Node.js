const { request } = require("express");

const index = (req, res) =>{
    res.render("session/index");
}

const setSession = (req, res)=>{
    req.session.name = "Sua Kim";
    req.session.age = 25;
    res.render("session/set_session");
}

const getSession = (req, res)=>{
    const sessionValue = {
        name : req.session.name,
        age : req.session.age
    };
    res.render("session/get_session", sessionValue);
}

const delSession = (req, res) =>{
    //delete req.session.name; // 특정 세션 하나만 삭제
    req.session.destroy(); //모든 세션 삭제

    res.render("session/del_session");
}

const login = (req, res) =>{
    res.render("session/login", {nick : req.session.nick});
}

const login_check =(req, res)=>{
    console.log("query", req.query);//=>query { id: 'ddd', pwd: 'ddd' }
    console.log("params", req.params);
    console.log("body", req.body); // post 방식일 땐  req.body
    //if문은 서비스에서 하기.
    const DBid = "aaa", DBpwd = "111", nick = "홍길동";
    if( DBid === req.body.id && DBpwd === req.body["pwd"]){
        req.session.id2 = DBid;  //전역변수처럼 다른 곳에서도 사용가능.
        req.session.nick = nick;
        return res.redirect("/session/success");
    }
    const msg = `<script>
        alert ("로그인 실패"); location.href="/session/login";
    </script>`;
    res.send(msg);
}

const success = (req, res) =>{
    console.log(req.session.id2);
    if(req.session.id2)
        res.render("session/success", {nick : req.session.nick} );
    const msg = `<script>
        alert("로그인하시오"); location.href="/session/login";
    </script>`
    res.send(msg);
}

const logout = (req, res)=>{
    req.session.destroy(()=>{
        console.log("모든 세션을 만료합니다");
    });
    res.redirect("/session/login")
}
module.exports={index, setSession, getSession, delSession, login, login_check, success, logout};