// Q1. 사용자의 이름과 인삿말을 입력받아 인사를 만드는 함수를 정의하세요.
function greet(name, hi = "안녕하세요"){
    return `${hi}, ${name}님!`;
}

console.log(greet("철수", "반갑습니다"));
console.log(greet("훈이"));
 