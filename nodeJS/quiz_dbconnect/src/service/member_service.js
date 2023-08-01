const memberDAO = require("../database/member_dao");
const register = async(body)=>{
    const result = await memberDAO.register(body);
    if(result == 0){
        msg = "Error has occured";
        url = "/member/join";
    }else{
        msg = "Sign Up Succeeded!";
        url = "/member/login";
    }
    const msgPack = getMessage(msg, url);
    return msgPack;
}

const getMessage = (msg, url) => {
    return `<script>alert("${msg}"); location.href="${url}";</script>`;
}
module.exports={register}