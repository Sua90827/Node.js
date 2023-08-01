const oracledb = require("oracledb");
const dbConfig = require("../../config/database/db_config"); 
oracledb.autoCommit=true;

const register = async()=>{
    oracledb.outFormat = oracledb.OBJECT;
    let con = await oracledb.getConnection(dbConfig);
    const sql = `INSERT INTO members2 (id, pwd, name, addr) VALUES(:id, :pwd ,:name, :address)`;
}