const http = require('http');//node에 대한 문법이고, import와 동일한 기능.(http모듈을 import 한다는 뜻.) 
const fs = require("fs")//다른 파일을 사용할 수 있게 해주는 모듈.
const app = http.createServer( (request,response)=>{ //http로 통신할 수 있는 서버를 만드는 것임.
/*
request : 사용자의 정보를 저장하는 객체
response : 사용자에게 응답하는 경우 사용하는 객체
*/
    console.log("connected");
    response.writeHead(200,
            {'Content-Type':'text/html; charset=utf-8'});
    
            console.log( request.url );
            if( request.url == "/" ){
                response.end("default page");
            }else if( request.url == "/test" ){
                fs.readFile("./test.html", (err, data)=>{
                    //err없으면 null, err발생하면 err 내용
                    if(err){
                        throw err;
                    }
                    response.end( data );
                });
            }
            //response.end("aaa11111222aaa");
        });
        
app.listen(3000,"192.168.42.115");               