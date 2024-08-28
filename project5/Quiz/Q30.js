// 30. 문자열 "Hello, JavaScript is fun!"에서
// 소문자 'a', 'e', 'i', 'o', 'u' 중
// 하나라도 포함된 문자를 모두 찾아 배열로 반환하세요.
// 문자열: "Hello, JavaScript is fun!";
// 결과: ["e", "o", "a", "a", "i", "i", "u"]

let str = "Hello, JavaScript is fun!";
let patt = /[aeiou]/g;
console.log(str.match(patt));