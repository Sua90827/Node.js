const memberDAO = require("../../database/member/member_dao");
const getList = async () =>{
    const result = await memberDAO.getList();
    console.log("service getList : "+result);
    return result.rows;
}
const insert = async (body) =>{
    const result = await memberDAO.insert(body);
    console.log("service insert =>", result);
    if(result == 0){
        msg="문제 발생";
        url="/member/register_form";
    }else{
        msg="등록 성공";
        url="/member/list";
    }
    const msgPack = getMessage(msg, url);
    return msgPack;
}
const getMessage = (msg, url) =>{
    return `<script>alert("${msg}"); location.href="${url}";</script>`;
}
const getMember = async (mId)=>{
    return await memberDAO.getMember(mId);
}
const modify = async (body) =>{
    const result = await memberDAO.modify(body);
    let msg="", url="";
    if(result ==0){
        msg = "문제 발생";
        url = "/member/modify_form?id="+body.id;
    }else{
        msg = "수정되었습니다";
        url = "/member/member_view/"+body.id;
    }
    return getMessage(msg, url);
}
const deleteMember=async(body)=>{
    const result = await memberDAO.deleteMember(body);
    let msg="", url="";
    if(result ==0){
        msg = "문제 발생";
        url = "/member/member_view/"+body.id;
    }else{
        msg = "삭제되었습니다";
        url = "/member/list";
    }
    return getMessage(msg, url);
}
module.exports={getList, insert, getMember, modify, deleteMember};