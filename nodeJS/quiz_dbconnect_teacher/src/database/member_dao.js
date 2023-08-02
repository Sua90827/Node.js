const oracledb = require("oracledb");
const dbConfig = require("../../config/database/db_config"); 
oracledb.autoCommit=true;
/*
oracledb.outFormat
    설정하지 않으면 2차원 배열로 들어오기 때문에 KEY, VALUE를 사용할 수 없다.
    [[VALUE, VALUE, VALUE],[VALUE, VALUE, VALUE],,]
    설정하면 1차원 배열에 [ {}, {} ,,,]형식으로 들어온다.
    즉 KEY, VALUE를 사용해 정보를 가져올 수 있다.
*/

const getMember = async(id)=>{//id = aaa
    oracledb.outFormat = oracledb.OBJECT;
    const con = await oracledb.getConnection(dbConfig);
    const sql = `select * from members02 where id='${id}'`;
    let member;
    try{
        member = await con.execute(sql);
    }catch(err){
        console.log(err);
    }

    console.log(member);
    return member;
}

const memberList = async()=>{
    console.log(":::::::::::::::::::::")
    oracledb.outFormat = oracledb.OBJECT;
    const con= await oracledb.getConnection(dbConfig);
    const sql = "select * from members02";
    let member;
    return (await con.execute(sql)).rows; //순서 주의
}

const register = async()=>{
    oracledb.outFormat = oracledb.OBJECT;
    let con = await oracledb.getConnection(dbConfig);
    const sql = `INSERT INTO members2 (id, pwd, name, addr) VALUES(:id, :pwd ,:name, :address)`;
}
module.exports = {getMember, memberList, register}