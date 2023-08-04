function readURL(input){
        
    //파일에 대한 정보
    const file = input.files[0];
    console.log(file);
    if(file != ""){
        console.log("gdgdgdgdgd");
        const reader = new FileReader(); //file을 정보를 토대로 읽어오는 것. 
        reader.readAsDataURL(file);
        reader.onload=(e)=>{//e는 이벤트 객체, 여기에 파일의 정보가 들어감. 
            console.log(e.target.result);
            document.querySelector("#preview").src = e.target.result;
        }
    }
}