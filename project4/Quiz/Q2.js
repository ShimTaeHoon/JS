// 다음 메시지에금지어가있으면XXX로변경하여출력하고, 없으면그대로출력하세요
// 금지어 : "나쁜, 더러운"
let ban = ["나쁜", "더러운"];
// 메시지: “저 친구는 나쁜친구야.정말 더러운 사람 같아”
let message = "저 친구는 나쁜 친구야.정말 더러운 사람 같아";
// 결과: “저 친구는 XX 친구야. 정말 XXX 사람 같아"
function replace(text, ban){
  let result = text;
  for(let change of ban){
    // repeat: x의 길이를 유동적으로 변경
    result = result.replace(change, "X".repeat(change.length));
    // 금지어를 "XX"로 대체
  }
  return result;
}

let result = replace(message, ban);
console.log(result);
