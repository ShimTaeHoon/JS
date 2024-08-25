let product = [
  { product: "감자칩", quantity: 10, price: 1500 },
  { product: "아이스크림", quantity: 0, price: 3000 },
  { product: "쿠키", quantity: 20, price: 2000 },
  { product: "탄산음료", quantity: 5, price: 1000 },
];
console.log(product);

//2) 새로운 제품 추가
product.push({ product: "바나나킥", quantity: 50, price: 1000 });
console.log(product);

//3) 재고가 있는 제품의 이름 변경
product.forEach((jaego) => {
  if (jaego.quantity > 0) {
    jaego.product = `(재고있음) ${jaego.product}`;
  }
});

console.log(product);

//4) 재고가 10개 넘는 제품의 가격을 10%할인
product.forEach((sale) => {
  if (sale.quantity > 10) {
    sale.price = sale.price * 0.9; // 가격의 10% 할인
  }
});
console.log(product);

//5) 모든 제품의 총 재고 가치를 계산
let totalPrice = product.reduce((total, totalPrice) => 
  total + totalPrice.quantity * totalPrice.price, 0
);

console.log(totalPrice);


