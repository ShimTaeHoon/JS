// 배열의 요소 값을 변경할 때는 map() 또는 forEach()사용
// map()은 새로운 배열을 반환하고,
// forEach()는 기존 배열을 수정하므로 간단한 변경은 forEach()를 사용할 것
// 재고가 있는 제품의 이름을 변경
inventory.forEach((item) => {
  if(item.quantity > 0){
    // ` -> 백틱 `(dd) ${고정요소};`;
    item.product = `(재고있음) ${item.product}`; // 또는 '(재고있음)' + item.product
  }
});