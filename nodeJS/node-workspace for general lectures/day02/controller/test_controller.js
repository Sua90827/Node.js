const member = require("../db/memberDAO");
const index = (req, res)=>{
    console.log("=== index controller connecting ===");
    console.log(member);
    res.render("index");
}

const test1 = (req, res)=> {
    res.render("test1");
}
const test2 = (req, res)=>{
    res.render("test2");
}

module.exports = {index, t1:test1, t2:test2};//index, test1, test2를 내보내겠습니다. 