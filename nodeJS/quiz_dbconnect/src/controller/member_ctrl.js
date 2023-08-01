const service = require("../service/member_service");
const login =(req, res)=>{
    res.render("member/login");
}
const join = (req, res)=>{
    res.render("member/join");
}
const joinDo = async(req, res)=>{
    const register = await service.register();
    
    res.render("/");
}
module.exports={login, join, joinDo}