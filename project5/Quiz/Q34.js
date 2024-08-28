// 34. 문자열 "abc123ABC"에서 대소문자 구분 없이
// 'abc'를 찾아 결과를 배열로 반환하세요.
// 문자열: "abc123ABC"
// 결과: ["abc", "ABC"]

let str = "abc123ABC";
let patt = str.match(/abc/gi);

console.log(patt);