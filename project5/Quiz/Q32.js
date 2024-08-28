// 32. 문자열 "JavaScript is powerful"에서
// 'is'라는 단어가 처음으로 등장하는 위치의
// 인덱스를 반환하세요.
// 문자열: "JavaScript is powerful"
// 결과: 11

let str = "JavaScript is powerful";
const regex = /is/;

console.log(str.search(regex));
