const service = require("../service/page_service");
const views = {
    index : (req, res)=>{
        res.render("index");
    },
    list : async (req, res)=>{ //비동기 함수가 있다는 것을 알려줌.
        const mList = await service.pageRead.list();
        res.render("list", {list:mList});
    }
}
module.exports={views};