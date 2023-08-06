const sessionConfig = {
    secret : "암호화 키",
    resave : false,
    /*
    resave : 세션을 새롭게 만들지 설정
    - false : 저장된 세션의 내용이 변경되지 않으면 이전 세션을 그대로 유지 사용
    - true : 저장된 세션의 내용이 변경되던 되지 않던 무조건 새롭게 세션을 생성
    */
    saveUninitialized : true
    /*
    saveUninitialized : 만들어지 세션을 새롭게 저장할 시 설정
    - true : 세션의 내용이 수정되거나 수정되지 않아도 무조건 세션을 저장한다
    - false : 세션이 수정되면 저장하고 그렇지 않으면 저장하지 않는다
    */
   //resave, saveUninitialized의 기본 권장 사항은 false, true이다
}
module.exports = { sessionConfig}; 
    