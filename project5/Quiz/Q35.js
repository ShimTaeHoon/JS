// 35. 문자열 "Hello, World! How are you today?"에서
// 대문자를 모두 찾아 배열로 반환하세요.
// 문자열: "Hello, World! How are you today?"
// 결과: ["H", "W", "H"]

let str = "Hello, World! How are you today?";
let patt = str.match(/[A-Z]/g);

console.log(patt);