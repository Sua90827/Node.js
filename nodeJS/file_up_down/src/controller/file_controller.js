const views = {
    index : (req, res)=>{
        //res.send("controller index 연동");
        res.render("file_index");
    }
}
const process = {
    upload : (req, res)=>{
        console.log("=== ctrl upload ===");
        console.log(req.body);
        console.log("------");
        console.log(req.file);
        console.log("======");
        console.log("Req.test: ",req.fileValidation);
        if(req.fileValidation){
            return res.send(req.fileValidation);
        }
        res.send("upload");
    }
}
module.exports={views, process};