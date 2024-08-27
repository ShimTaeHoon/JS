// Q20. 아래와 같이 변수 두개를선언하세요.
// 빈객체product를 생성하고, 변수를 사용하여동적으로속성을추가하세요.
// key1 = "productName"; key2 = "productPrice";
// 초기객체: { }
// 업데이트된객체: { productName: "필통",  productPrice: 5000

let key1 = "productName";
let key2 = "productPrice";

let product = {};

product[key1] = "필통";
product[key2] = 5000;

console.log(product);