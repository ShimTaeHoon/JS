// 31. 문자열 "Welcome to the world of coding!"에 
// 'coding'라는 단어가 포함되어 있는지 확인하세요.
// 문자열: "Welcome to the world of coding!"
// 결과: true

let str = "Welcome to the world of coding";
const regex = new RegExp('coding');

console.log(regex.test(str));