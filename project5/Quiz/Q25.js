// Q25. 함수에서 객체를 매개변수로받아, 
// 'brand'와 'model' 속성을 출력하세요
let obj = {
  brand: "Tesla",
  model: "Model S",
  color: "Red",
};

let { brand, model} = obj;
console.log("자동차 브랜드:", brand, "모델명", model);