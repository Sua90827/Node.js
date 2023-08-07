const dao = require("../database/pageDAO");
const pageRead = {
    list : async ()=>{
        const list = await dao.daoRead.list();
        console.log("service : ", list);
        return list.rows;
    }
}
module.exports={pageRead};