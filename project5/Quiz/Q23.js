// Q23. 객체에서 브랜드(brand)와 가격(price) 속성을 추출하여
// 변수에 저장하세요

let obj = {
  brand: "Apple",
  price: 990000,
  model: "iPhone13",
};

let { brand, price} = obj;
console.log("브랜드:", brand);
console.log("가격:", price);

