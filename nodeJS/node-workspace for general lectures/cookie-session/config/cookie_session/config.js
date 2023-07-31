const sessionConfig = {
    secret : "아무노래", //""내부에는 아무거나 써도 된다.
    resave : false,
    saveUninitialized : true,
    //cookie : { maxAge : 5000 }, //시간 설정 1000 = 1초
}
module.exports = {sessionConfig};
/*
    resave : false : 세션 id를 한번만 발급받는다.
    saveUninitialized : true : 세션 id를 발급받으면 사용하겠다.
    위 두개의 설정은 기본 권장사항으로 false, true로 설정하고 사용한다고 보면 된다.
*/