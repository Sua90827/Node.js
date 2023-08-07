const oracledb = require("oracledb");
const dbConfig = require("../../config/db_config");
oracledb.outFormat=oracledb.OBJECT;
oracledb.autoCommit=true;

const daoRead={
    list : async()=>{
        const con = await oracledb.getConnection(dbConfig);
        const result = await con.execute("select * from paging");
        return result;
    }

}
module.exports={daoRead};