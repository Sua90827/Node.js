const dbCart = require("../../database/cookie/user_cart");

const cart = ()=>{
    return dbCart
}

const save2 = ( cart_list, goods )=>{
    //{1: 개수, 2:개수,,,}
    //최초 => {}
    if(!cart_list[goods]){
        //1을 클릭하면 cart_list = {1 : 0}
        cart_list[goods] =0;
        
    } 
    //cart_list={1:1}
    cart_list[goods] = cart_list[goods] +1;
    return cart_list;
    /*
    for(var i=0; i<dbCart.length; i++){
        if(dbCart[i].goods_id == goods){
            cart_list = dbCart[i];
            break;
        }
    }
    return cart_list;
    */
}

const view_list=(cart_list)=>{
    console.log("____ser view_list __")
    console.log(cart_list)
    let list=[];
    for( i in cart_list){
        console.log("key : ", i)
        let item = {};
        item['goods_id'] = i;
        item['title'] = dbCart[i-1].title;
        item['price'] = dbCart[i-1].price;
        item['number'] = cart_list[i];
        item['total'] = dbCart[i-1].price*cart_list[i];
        list = list.concat(item);
        //list.push(item); 위의 concat이랑 같은 기능임. 둘 중 하나만 쓰자.
    }
    return list;
}
module.exports={cart, save2, view_list};