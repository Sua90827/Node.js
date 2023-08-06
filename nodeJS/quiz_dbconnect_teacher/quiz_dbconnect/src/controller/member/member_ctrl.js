const ser = require("../../service/member/member_service");
const login = (req, res) =>{
    res.render("member/login",
            {username : req.session.username});
}
const loginCheck = async (req, res) =>{
    const msgPack = await ser.loginCheck( req.body );
    if( msgPack.result === 0){
        req.session.username = req.body.id;
    }
    res.send( msgPack.msg );
}
const logout = (req, res) =>{
    req.session.destroy();
    res.clearCookie('isLogin');
    res.redirect("/");
}
const memberList = async (req, res) =>{
    console.log("username => ", req.session.username);
    console.log("isLogin => ", req.cookies.isLogin);
    if(!req.cookies.isLogin && !req.session.username){
        msg = "로그인 사용자만 접근 가능합니다!!!";
        url = '/member/login';
        return res.send( ser.getMessage(msg, url) );
    }
    const list = await ser.memberList();
    res.render("member/list",{ list });
}

const registerView = (req, res) =>{
    res.render("member/register_view");
}
const register = async (req, res) => {
    const msg = await ser.register( req.body );
    res.send( msg );
}
const getMember = async (req, res) =>{
    const member = await ser.getMember( req.params.id );
    res.render("member/info", 
        { member , username:req.session.username});
}
const memberDelete = async (req, res) =>{
    const result = await ser.memberDelete( 
    req.params.id, req.session.username );
    if(result === 1){
        return res.redirect("/member/logout");
    }else if(result === 0 ){
        return res.redirect("/member/list");
    }
    msg = "삭제 실패!!!";
    url = '/member/list';
    return res.send( ser.getMessage(msg, url) );
}
const memberModifyView = async (req, res) =>{
    if(req.session.username === req.params.id ){
        const member = await ser.getMember(req.params.id);
        return res.render("member/modify_form", { member });
    }
    res.send( ser.getMessage("수정할 수 없음!!",
                        "/member/member_info/"+req.params.id) );
}
const memberModify = async (req, res) =>{
    const msg = await ser.memberModify(req.body);
    res.send(msg);
}
                
module.exports = {memberModify,memberModifyView,memberDelete, getMember, register, registerView, 
    memberList,logout, login , loginCheck };
