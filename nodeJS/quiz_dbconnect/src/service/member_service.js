const memberDAO = require("../database/member_dao");

const member = {
    login : async(body, session)=>{
        let msgPack;
        let msg="", url = "";
        if(body.id == null || body.id == ""){
            msg = "input the id";
            url = "/member/login";
        }else if(body.pwd == null || body.pwd == ""){
            msg = "input the pwd";
            url = "/member/login";
        }
    
        if(msg != ""){
            msgPack = getMessage(msg, url);
            return msgPack;
        }
        const result = await memberDAO.member.loginDo(body);
        if(result == undefined){
            msg = "아이디가 없습니다.";
            url = "/member/login";
        }else{
            if(result.ID == body.id){
                if(result.PWD == body.pwd){
                    msg = "로그인 성공";
                    url = "/"
                    session.sua = body.id;
                }else{
                    msg = "비밀번호가 일치하지 않습니다.";
                    url = "/member/login";
                }
            }
        }
        return getMessage(msg, url);
    },

    register : async(body)=>{
        let msgPack;
        let msg = "", url = "";
        if(body.id == null ||body.id ==""){
            msg = "input the id";
            url = "/member/join";
        }else if(body.pwd == null ||body.pwd ==""){
            msg = "input the password";
            url = "/member/join";
        }else if(body.name == null ||body.name ==""){
            msg = "input the name";
            url = "/member/join";
        }else if(body.address == null ||body.address ==""){
            msg = "input the address";
            url = "/member/join";
        }
        if(msg != ""){
            return getMessage(msg, url);
        }
    
        const result = await memberDAO.register(body);//{ id: 'www', pwd: 'ww', name: 'ww', address: 'ww' }
        console.log("memberService result ===> ",result);
        if(result == undefined){
            msg = "Error has occured";
            url = "/member/join";
        }else{
            msg = "Sign Up Succeeded!";
            url = "/member/login";
            
        }
        msgPack = getMessage(msg, url);
        return msgPack;
    }
}

const getMessage = (msg, url) => {
    return `<script>alert("${msg}"); location.href="${url}";</script>`;
}
module.exports={member}