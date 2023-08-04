const router = require("express").Router();
const multer = require("multer");//multer는 파일을 관리해 줌.
//const upload = multer({dest : "upload_file"});//파일을 저장할 폴더 위치 des = destination 프로젝트 바로 하위에 폴더 만들어야 함.
const stg = multer.diskStorage({//어떤 방식으로 저장을 할건지
    destination : (req, file, cb)=>{//cb는 목적지를 실행하는 콜백함수(백그라운드에서 실행된다.)
        console.log("====dest====");
        cb( null, "upload_file");//어디에 저장할지
    },
    filename : (req, file, cb)=>{//file name을 cb함수를 이용해서 지정할 수 있음.
        console.log("====filename====");
        console.log(file);
        cb(null, Date.now()+"-"+file.originalname);
    }
});
const f_Filter = (req, file, cb)=>{
    console.log("==== filter ====");
    const type = file.mimetype.split("/")[0];//앞 뒤로 0번째, 1번째로 쪼개짐. 
    console.log("type : ", type);
    if(type ==="image"){
        cb(null, true); //이게 false면 파일을 저장하지 않겠다는 뜻. 
    }else{
        //req = {test : "...."}
        req.fileValidation = "이미지만 저장하세요!";//fileValidation은 변수명이고 변경 가능함.
        cb(null, false);// 저장하지 않고 controller로 req 가지고 감. key:value 형태로.
    }
    
}
const upload = multer({storage : stg, fileFilter : f_Filter});
const fileCtrl = require("../controller/file_controller");
router.get("/", fileCtrl.views.index);
router.post("/upload", upload.single("file_name"), fileCtrl.process.upload);//여기로 오면 일단 가운데 함수 실행하고 오른쪽으로 이동//single = 단일 파일
module.exports=router;