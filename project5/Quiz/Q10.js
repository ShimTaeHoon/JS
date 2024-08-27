// Q10. 다음의 익명 함수를 화살표함수로변환하세요.
//  const multiplyAndAdd = function(a, b, c) {
//  const temp = a * b;
//  const result = temp + c;
//  return result;
//  };

const multiplyAndAdd = (a, b, c) => {
  const temp = a * b;
  const result = temp + c;
  return result;
};

console.log(multiplyAndAdd(1, 2, 3));
