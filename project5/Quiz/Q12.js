// Q12. filter에서 사용한 익명 함수를 화살표 함수로 변환하세요.
//  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  const evenNumbers = arr.filter(function(number) {
//  return number % 2 == 0;
//  });

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = arr.filter((number) => number % 2 ==0);

console.log(evenNumbers);