const memberDAO = require("../database/member_dao");
const register = async()=>{
    const registered = await memberDAO.register();

}
module.exports={register}