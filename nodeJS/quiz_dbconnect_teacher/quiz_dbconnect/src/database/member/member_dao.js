const oracledb = require("oracledb");
const dbConfig = require("../../../config/database/db_config");
oracledb.autoCommit = true;
oracledb.outFormat = oracledb.OBJECT;

const getMember = async ( id ) => {
    const con = await oracledb.getConnection(dbConfig);
    const sql = `select * from members02 where id='${id}'`;
    let member;
    try{
        member = await con.execute(sql);
    }catch(err){
        console.log( err );
    }
    return member;
}
const memberList = async ( ) => {
    const con = await oracledb.getConnection(dbConfig);
    const sql = "select * from members02";
    return ( await con.execute(sql) ).rows;
}
const register = async ( body ) =>{
    const con = await oracledb.getConnection(dbConfig);
    const sql = "insert into members02 values(:id,:pwd,:name,:addr)";
    let result;
    try{
        result = await con.execute(sql, body);
    }catch(err){
        console.log(err)
    }
    return result;
}   
const memberDelete = async ( id ) => {
    const con = await oracledb.getConnection(dbConfig);
    const sql = `delete from members02 where id='${id}'`;
    let result;
    try{
        result = await con.execute(sql);
    }catch(err){
        console.log( err );
    }
    return result;
}
const memberModify = async (body) => {
    const con = await oracledb.getConnection(dbConfig);
    const sql =
    "update members set pwd=:pwd, name=:name, addr=:addr where id=:id";
    let result;
    try{
        result = await con.execute(sql, body );
    }catch(err){
        console.log(err);
    }
    return result;
}
    
module.exports = { memberModify,memberDelete,getMember , memberList , register};
    
