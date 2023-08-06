const service = require("../service/member_service");
const loJo = {
    login : (req, res)=>{
        res.render("member/login", {username:req.session});
    },
    loginDo : async (req, res)=>{
        
        const msg = await service.member.login(req.body, req.session);
        console.log("session userId ==> ",req.session.username);
        res.send(msg);
    },
    join : (req, res)=>{
        res.render("member/join", {username:req.session});
    },
    joinDo : async (req, res)=>{
        const msg = await service.member.register(req.body); //{ id: 'www', pwd: 'ww', name: 'ww', address: 'ww' }
    
        res.send(msg);
        // res.render("/");
    }
}
module.exports={loJo};