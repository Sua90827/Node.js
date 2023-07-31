const ser = require("../../service/cookie/cookie_service");

const cookieConfig = {//쿠키 수명 기간 설정
    httpOnly : true,
    maxAge : 80000, //1000분의 1초 단위, 1000 = 1초
    signed : true
}

const index = (req, res)=>{
    let userCookie = req.signedCookies.myCookie;//사용자 요청으로부터 쿠키를 가져올건데, mycookie라는 애가 있으면 가져와.
    //암호화사용안할 경우에는 req.cookies.myCookie이고, 암호화 할 경우에는 req.signedCookies.myCookie임
    res.cookie("myCookie", "valueCookie", cookieConfig);//mycookie라는 변수(name)에 valueCookie를(value) 넣어줌.
    res.render("cookie/cookie01", {userCookie});
}

const popup = (req, res)=>{
    res.render("cookie/popup");
}

const quiz = (req, res)=>{
    const userCookie = req.cookies.myCookie;
    res.render("cookie/quiz", {userCookie});
}

const quizPopup = (req, res)=>{
    res.render("cookie/quizPopup");
}

const makeCookie = (req, res)=>{
    res.cookie("myCookie", "value", cookieConfig); //사용자에게 쿠키 전달..?
    res.render("cookie/quizPopup");
}

const cart = (req, res)=>{
    res.render("cookie/cart", {list: ser.cart()}); //return 값을 list에 담아서 cart로 보내주겠다는 뜻
}

const save1 = (req, res)=>{
    console.log("--save1--");
    //?로 가져오는 경우에는 req.query를 사용.
    console.log(req.query); //=>{ id: '1' }
    console.log(req.query.id); //=>1
    res.send("save1 connected");
}

const save2 = (req, res)=>{
    console.log("---save2 connected---");

    let cart_list = req.signedCookies.cart_list;
    if(cart_list === undefined){
        cart_list = {};
    }

    cart_list = ser.save2(cart_list , req.params.goods);
    res.cookie("cart_list", cart_list, cookieConfig);
    console.log("cart_list : ",cart_list);
    // ?가 아닌, /로 값을 가져오는 경우에는 req.params.변수를 사용
    //console.log(req.params.goods); //=>id=1
    //console.log(req.params);//=>{ goods: 'id=1' }
    const msg = `<script>
                    alert("${req.params.goods} 상품이 등록되었습니다");
                    location.href = "/cookie/cart";
                 </script>`;

    res.send(msg);
}

const viewList=(req, res)=>{
    let cart_list = req.signedCookies.cart_list;
    if(!cart_list){//(cart_list === undefined) 와 같은 의미.
        const msg = `<script>
        alert("저장된 목록이 없습니다.");
        location.href = "/cookie/cart";
     </script>`;

res.send(msg);
    }
    res.render("cookie/view_list", {list : ser.view_list(cart_list)});

    
}
module.exports={index, popup, quiz, quizPopup, makeCookie, cart, save1, save2, viewList};