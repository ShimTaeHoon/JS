// Q10. 상품을 관리하는 프로그램을 만들어 주세요
//  1) 상품목록 배열을 생성하세요.
//  2) 상품들을 가격을 기준으로 오름차순 정렬하세요.
//  3) 가격이 50000원 이상 500000원 이하이고, 카테고리가 “전자제품”인 상품들을 찾으세요.
//  4) 상품의 가격을 한국원화 형식(예: "₩1000")으로 변환하세요

//  1) 상품목록 배열을 생성하세요.
const products = [
  { name: "스마트폰", price: 799000, category: "전자제품"},
  { name: "노트북", price: 1200000, category: "전자제품"},
  { name: "헤드폰", price: 150000, category: "전자제품"},
  { name: "키보드", price: 100000, category: "액세서리"},
  { name: "마우스", price: 50000, category: "액세서리"},
  { name: "충전기", price: 30000, category: "액세서리"},
  { name: "블루투스 스피커", price: 90000, category: "전자제품"},
];

//  2) 상품들을 가격을 기준으로 오름차순 정렬하세요.
products.sort(
  // sort를 이용해서 가격을 기준으로 오름차순 정렬하기
  function(a, b){
    return a.price - b.price;
  }
);

console.log("정렬된 상품 목록:",  products);

// 3) 가격이 50000원 이상 500000원 이하이고, 
// 카테고리가 “전자제품”인 상품들을 찾으세요.
let search = products.filter(

  function (products){
    // 가격이 50000원 이상 500000원 이하이고
    return products.price >= 50000 && products.price <= 500000
    // 카테고리가 “전자제품”인 상품들을 찾기
          && products.category === "전자제품";
  }

);

console.log("필터링된 상품 목록:",  search);

//  4) 상품의 가격을 한국원화 형식(예: "₩1000")으로 변환하세요
let newList = search.map(

  function (productsMap) {
    return {
      name: productsMap.name,
      formattedPrice: "₩" + productsMap.price,
      category: productsMap.category,
    };

  }

);

console.log(newList);


