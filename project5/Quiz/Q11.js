// Q11. map에서 사용한 익명 함수를 화살표함수로변환하세요.
//  const numbers = [1, 2, 3, 4, 5];
//  const doubled = numbers.map(function(number) {
//  return number * 2;
//  })

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);