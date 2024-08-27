// Q18. 아래와 같이 변수 세개를선언하세요.
//  key1 = "make";  key2 = "model";  key3 = "year";
// 그리고이세개의변수를키로사용하여자동차객체car를생성하세요.
// 객체: { make: '현대', model: '쏘나타', year: 2021 

let key1 = "make";
let key2 = "model";
let key3 = "year";

let car = {
  [key1]: '현태',
  [key2]: '쏘나타',
  [key3]: '2021',
};

console.log(car);