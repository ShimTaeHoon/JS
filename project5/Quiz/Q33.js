// 33. 문자열 "banana"에서
// 'a' 문자가 하나 이상 연속된 부분을 
// 모두 찾아 배열로반환하세요.
// 문자열: "banana"
// 결과: ["a", "a", "a"]

let str = "banana";
let patt = /a+/g;
console.log(str.match(patt));