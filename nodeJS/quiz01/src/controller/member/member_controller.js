 const service = require("../../service/member/member_service");
const login = (req, res)=>{
    res.render("member/login");
}
const login_ch = (req, res)=>{
    console.log("gdgd");
    const member = service.db();
    let loginCheck = true;

    member.forEach(mem => {
        console.log(req.query.id);
        if(req.query.id==mem.id){                               
            if(req.query.name==mem.name){
                res.render("member/list", {member});
                loginCheck = false;
            }
        }
    });
    if(loginCheck){
        res.render("member/login");
    }
}

const userInfo = (req, res) => {
    const db = service.db();
    db.forEach( mem => {
        if(mem.name === req.query.name){
            res.render("member/info", {mem})
        }
    })
    // 주석 방법 써도 됌!! (보안 취약)
    // const mem = {id:req.query.id, name:req.query.name, addr:req.query.addr}
    // res.render("member/info", {mem});

}
const list = (req, res)=>{
    const member = service.db();
    res.render("member/list", {member});
}
module.exports = {login, login_ch, userInfo, list};