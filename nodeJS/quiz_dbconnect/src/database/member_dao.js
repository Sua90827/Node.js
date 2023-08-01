const oracledb = require("oracledb");
const dbConfig = require("../../config/database/db_config"); 
oracledb.autoCommit=true;

const register = async (body) =>{
    oracledb.outFormat = oracledb.OBJECT;
    let con = await oracledb.getConnection(dbConfig);
    const sql = `INSERT INTO members02 (id, pwd, name, addr) VALUES(:id, :pwd ,:name, :address)`;

    let result = 0;
    try{
        result = await con.execute(sql,body);
        console.log("dao insert : ", result);
    }catch(err){
        console.log(err)
    }
    return result;
}
module.exports={register};