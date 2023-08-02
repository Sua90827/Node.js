const memberDAO = require("../database/member_dao");
const loginCheck = async (body)=>{//body = { id: 'aaa', pwd: 'aaa' }
    let member = await memberDAO.getMember(body.id);//body.id = aaa
    let msg="", url="", msgPack={};
    console.log("**********",member);
    if(member.rows.length === 1){
        member = member.rows[0];
        if(member.PWD == body.pwd){
            msg=member.NAME+"님 환영합니다!";
            url = "/"; 
            msgPack.result=0;
        }
    }else{
        //해당하는 id가 존재하지 않는 경우
        msg = "해당하는 id는 존재하지 않습니다!";
        url = "/member/login";
    }
    //msgPack = {msg:"<script>...</script>"}
    msgPack.msg = getMessage(msg, url);
    return msgPack;
}

const getMessage=(msg, url)=>{
    return `<script>
        alert("${msg}");
        location.href="${url}";
    </script>`; 
}

const memberList = ()=>{
    console.log("&&&&&&&&&&&&&&",memberDAO.memberList());
    return memberDAO.memberList();
}


const register = async()=>{
    const registered = await memberDAO.register();

}
module.exports={loginCheck, memberList, register};