const service = require("../service/test_service04");

const index = (req, res)=>{
    const mem = service.index();
    res.render("index", { member: mem });
}

const test1 = (req, res)=> {
    console.log("===test1 controller connecting==");
    //res.render("test1");
    res.redirect("/");
}
const test2 = (req, res)=>{
    res.render("test2");
}

module.exports = {index, t1:test1, t2:test2};//index, test1, test2를 내보내겠습니다. 