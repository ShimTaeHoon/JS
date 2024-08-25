let ban = ["나쁜", "더러운"];
let message = "저 친구는 나쁜 친구야. 정말 더러운 사람 같아";

for(let banList of ban){
  message = message.replace(banList, "X".repeat(banList.length));
}

console.log(message);