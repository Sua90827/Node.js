const service = require("../service/member_service");
const login =(req, res)=>{
    res.render("member/login", {username : req.session.username});
}

const loginCheck = async (req, res)=>{
    //req.body =  { id: 'aaa', pwd: 'aaa' }
    const msgPack = await service.loginCheck(req.body);
    console.log("msgPack!!!!!!!!!!!!!!!!!!!",msgPack);
    if( msgPack.result ===0){
        req.session.username = req.body.id;
    }
    res.send(msgPack.msg);
}

const logout = (req, res)=>{
    req.session.destroy();//세션 종료
    res.clearCookie("isLogin");//쿠키 종료
    res.redirect("/");
}

const list = async (req, res)=>{
    const mlist = await service.memberList();

    res.render("member/list", {username : req.session.username, list : mlist});
}

const join = (req, res)=>{
    res.render("member/join", {username : req.session.username});
}
const joinDo = async(req, res)=>{
    const register = await service.register();
    
    res.redirect("/");
}

module.exports={login, loginCheck, logout, list, join, joinDo}