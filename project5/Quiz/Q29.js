// 문자열 "I have 2 apples and 3 oranges."에서
// 숫자(0-9)를 모두 찾아 배열로 반환하세요
// 문자열: "I have 2 apples and 3 oranges."
// 결과: ["2", "3"]

let str = "I have 2 apples and 3 oranges."

let patt = /[0-9]/g;
console.log(str.match(patt));
