const ser = require("../../service/member/member_service");

// oracledb.autoCommit=true;

 const list = async (req, res)=>{ //비동기방식으로 처리되는 애가 안에 있어요.
    const getList = await ser.getList();
    
    res.render("member/member_index", {list : getList});
    
    // console.log(dbConfig);
//     let con = await oracledb.getConnection(dbConfig);//연결된 객체가 들어오면 실행할거야.
//     console.log("con: ", con);
//     oracledb.outFormat = oracledb.OBJECT;//나중에 데이터 추출이 쉽도록 [{},{}] 이런 형식으로 출력되게 해줌.

//     let result = await con.execute("select * from members02");
//     console.log("result : ",result);
//     //await con.close();
//    res.send("list 페이지 연동: "+result.rows[0]);

 }
// }//db 연결시에는 async와 await을 거의 무조건 써야한다.

const registerForm = async (req, res)=>{
    res.render("member/register_form");
}

const register= async (req,res)=>{
    console.log("register :",req.body);
    let msg = await ser.insert(req.body);
    res.send(msg);
}
const memberView = async (req, res) =>{
    console.log("memberView ctrl : ",req.params);
    const member = await ser.getMember(req.params);
    //res.send("memberview");
    res.render("member/member_view", {member});
}
const modifyForm = async (req, res)=>{
    console.log("ctrl modify : ", req.query);

    const member = await ser.getMember(req.query);
    console.log("ctrl modify : ". member);

    res.render("member/modify_form", {member});
}
const modify = async (req, res)=>{
    console.log("ctrl modify: ", req.body);
    const msg = await ser.modify(req.body);
    res.send(msg);
}

const deleteMember = async (req, res)=>{
    const msg = await ser.deleteMember(req.params);
    res.send(msg);
}
module.exports={list, registerForm, register, memberView, modifyForm, modify, deleteMember};