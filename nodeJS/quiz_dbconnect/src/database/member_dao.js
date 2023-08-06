const oracledb = require("oracledb");
const dbConfig = require("../../config/database/db_config"); 
oracledb.autoCommit=true;

const member = {
    register : async (body) =>{
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
       return result.rowsAffected;
    },

    loginDo : async (body) => { //{ id: 'gdgd', pwd: 'gdgd' }
        oracledb.outFormat = oracledb.OBJECT;
        let con = await oracledb.getConnection(dbConfig);
        const sql = `SELECT * FROM members02 WHERE id = '${body.id}'`;
        console.log("loginDo 잘 오니?", body);
        let result;
        try{
            result = await con.execute(sql);
            console.log("dao insert : ", result);
        }catch(err){
            console.log(err)
        }
        console.log(result);
       return result.rows[0];
    }
}
module.exports={member};