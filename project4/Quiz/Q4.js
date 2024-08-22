// 문자열의 모든 자리수를 더해서 합을 구하세요
// 문자열: “0112233"
// 결과: 12

let str = "0112233";
let sum = 0;

for(let i = 0; i < str.length; i++){
  sum = sum + parseInt(str[i]);
}

console.log(sum);
////////////////////////////////////////////////////////////////////////
let str2 = "0112233";
let sum2 = 0;

for (let s of str) {
  console.log(s, typeof s); //"0" string
  let num = parseInt(s); // "0" -> 0
  sum2 = sum2 + num;
  // 두 항이 모두 숫자이기 때문에
  // +기호는 더하기 연산자!
}

console.log(sum2);

////////////////////////////////////////////////////////////////////////
// 잘모된 코드~!
let result = 0;

for (let s of str) {
  result = result + s; // 문자열 결합 연산자
}

console.log(result); // 합계