const memberDAO = require("../../database/member/member_dao");
const loginCheck = async ( body )=>{
    let member = await memberDAO.getMember( body.id );
    let msg="", url="", msgPack = {};
    if(member.rows.length == 1){
        member = member.rows[0];
        if( member.PWD === body.pwd ){
            msg = `${member.NAME}님 환영합니다^^`;
            url = "/";
            msgPack.result = 0;
        }else{
            msg = "비밀번호가 틀렸습니다!!!";
            url = '/member/login';
            msgPack.result = 1;
        }
    }else{
        msg = "존재하지 않는 아이디입니다!!";
        url = "/member/login";
        msgPack.result = 1;
    }
    msgPack.msg = getMessage(msg, url);
    return msgPack;
};
const  getMessage = (msg, url) =>{
    return `<script>alert('${msg}'); location.href="${url}";</script>`;
}
const memberList = () =>{
    return memberDAO.memberList();
}
const register = async ( body )=>{
    let result = await memberDAO.register( body );
    let msg="", url="";
    console.log("result : ", result);
    if(result !== undefined){      
        msg = `${body.name}님 회원가입 성공^^`;
        url = "/member/login";
    }else{
        msg = "문제가 발생했습니다!!!";
        url = '/member/register_view';
    }
    return getMessage(msg, url);
};
const getMember = async ( id ) =>{
    const list = await memberDAO.getMember( id );
    return list.rows[0];
}    
const memberDelete = async (id, username) =>{
    const result = await memberDAO.memberDelete( id );
    //삭제 실패 rowsAffected : 0, 성공 : 1
    if( result.rowsAffected === 1 ){
        if(id === username){ //로그인 사용자와 삭제사용자 일치
            return 1;
        }
    }else{//삭제 실패
        return -1; 
    }
    return 0; //로그인 사용자와 다른 사용자 삭제
}
const memberModify = async (body) => {
    const result = await memberDAO.memberModify(body);
    let msg="", url="";
    if(result.rowsAffected == 1){
        msg = `${body.name}님 수정되었습니다^^`;
        url = `/member/member_info/${body.id}`;     
    }else{
        msg = "문제가 발생했습니다!!!";
        url = `/member/modify/${body.id}`;
    }
    return getMessage(msg, url);
}
       
module.exports = { memberModify,memberDelete, getMember,getMessage,register, memberList, loginCheck , memberList };
    
