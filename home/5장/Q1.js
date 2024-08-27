//Q1. 사용자의 이름과 인삿말을입력받아인사를만드는함수를정의하세요.
// 함수를호출했을때다음과같은결과를출력하세요

function greet(name, hi = "안녕하세요"){
  return `${hi}, ${name}님!`
}

console.log(greet("철수", "반갑습니다"));
console.log(greet("훈이"));