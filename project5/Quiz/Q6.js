// Q6. 상품들의 가격을 계산하는프로그램을만들어주세요.
// 여러상품을 인자로 입력받아, 평균 가격을 반환 하는 함수를 정의하세요.
// 각상품의 할인율을 적용하여 최종가격을 계산해야 합니다.
// 예: 새우깡의 최종가격: 1500 * 0.9 = 1350원
let pro1 = { name: "새우깡", price: 1500, discount: 10 };
let pro2 = { name: "홈런볼", price: 2000, discount: 5 };
let pro3 = { name: "포카칩", price: 2500 };
let pro4 = { name: "칙촉", price: 3000, discount: 15 };
let pro5 = { name: "오잉", price: 1800 };

function proCal(...products) {
  let sum = 0;

  for(let product of products){
    let lastPrice = product.price;
    if(product.discount !== undefined){
      lastPrice = product.price * (1 - product.discount / 100);
    }
    sum += lastPrice;
  }

  let average = sum / products.length;
  // return Math.floor(average); // 소수점 무조건 내림
  // return Math.trunc(average); // 소수점 이하 제거
  return average.toFixed(2);

}

console.log("새우깡과 홈런볼의 평균 가격은", proCal(pro1, pro2, pro3), "입니다");
console.log("모든 상품의 평균 가격은", proCal(pro1, pro2, pro3, pro4, pro5), "입니다");

