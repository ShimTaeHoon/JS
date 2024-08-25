const products = [
  { name: "스마트폰", price: 799000, category: "전자제품" },
  { name: "노트북", price: 1200000, category: "전자제품" },
  { name: "헤드폰", price: 150000, category: "전자제품" },
  { name: "키보드", price: 100000, category: "액세서리" },
  { name: "마우스", price: 50000, category: "액세서리" },
  { name: "충전기", price: 30000, category: "액세서리" },
  { name: "블루투스 스피커", price: 90000, category: "전자제품" },
];

//1) 상품 목록 배열 생성
console.log(products);

//2) 가격 기준으로 오름차순 정렬
products.sort((a, b) => a.price - b.price);
console.log(products);

//3) 가격이 50000원이상 500000원 이하이고, 카테고리가 "전자제품"인 상품
let proFilter = products.filter((pd) => pd.price > 50000 && pd.price < 500000 
                                         && pd.category == "전자제품");

console.log(proFilter);

//4) 상품의 가격을 원화로 바꾸기
//화살표 함수에 return을 생략하고 싶으면 ()괄호로 한번 더 묶으면 됨
let format = proFilter.map((ff) => ({
    name: ff.name,
    formattedPrice: `**${ff.price}`,
    category: ff.category,
}));

console.log(format);