// 주어진 문자열에서 연속된 동일한 문자들이 몇 번 반복되는지 세고, 
// 이를 “문자+숫자” 형식으로압축하세요
// 문자열: aaabbc
// 결과: a3b2c1

let str = 'aaabbc'
let cnt = 1 
let strSum = '';
for(let i=0; i < str.length ; i++){
  if(str.charAt(i) === str.charAt(i+1)){
    str = str.charAt(i);
    cnt++;
  }else{
    cnt = 1
  }
  console.log(str + cnt); 
}

//////////////////////////////////////
const str2 = "aaabbc";
let compressed = ""; // 압축된 문자
let count2 = 1; // 현재 문자가 몇번 반복되었는지 카운트

for(let i = 0; i < str.length; i++){
  // 현재 문자가 다음 문자와 같은지 비교
  if(str2[i] === str2[i + 1]){
    count++;
  } else {
    // 같지 않으면 카운트 종료. 압축된 문자 추가
    compressed = compressed + str2[i] + count;
    count = 1; // 카운트 초기화
  }
}

console.log(compressed); // 출력 : a3b2c1

// 초기 상태:
// str = "aaabbcc"
// compressed = ""(빈 문자열)
// count = 1

// i = 0
// str[0] = 'a'
// count = 2로증가 다음 문자도 'a라서'
// compressed : "" (변경없음)

// i = 1 
// str[1] = 'a'
// count = 3로 증가(다음 문자도 'a'라서)
// compressed: ""(변경 없음)

// i = 2
// str[2] = 'a'
// compressed : "a3"
// count = 1로 초기화(다음문자가 'b'로 바뀜)