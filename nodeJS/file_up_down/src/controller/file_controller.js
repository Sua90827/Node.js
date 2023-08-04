const fs = require("fs");//파일에 관련된 기능을 불러올 수 있음.
const views = {
    index : (req, res)=>{
        //res.send("controller index 연동");
        res.render("file_index");
    },
    list : (req, res)=>{
        const fileList = fs.readdirSync("./upload_file");
        console.log("==동기방식처리===");
        console.log(fileList);
        //res.send("test")
        res.render("file_list", {files: fileList});//files를 filelist로 뿌려줌.
    },
    download : (req, res)=>{
        const filePath = `./upload_file/${req.params.fileName}`;
        res.download(filePath);
    },
    modifyForm : (req, res)=>{
        const fileName = req.params.fileName;
        res.render("modify_form", {fileName});
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
    },
    deleteFile : (req, res)=>{
        fs.unlinkSync(`./upload_file/${req.params.fileName}`); //동기방식처리
        res.redirect("/file/list");
    },
    modify : (req, res)=>{
        console.log("=====modify=====");
        console.log(req.file); //file값이 없으면 변경 안됨/ file값이 있으면 변경 됨.
        if(req.file){
            return res.redirect(`/file/deleteFile/${req.body.originFileName}`);
        }
        res.redirect("/file/list");
    }
}
module.exports={views, process};