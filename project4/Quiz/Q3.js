// 파일의 확장자가‘.jpg’ ‘.png’ ‘.gif’ 이 아니라면 
// “지원되지 않는 파일 형식입니다”라는 메시지를 출력하세

// 파일명: “사과.txt”
let file = "사과.jpg";
// 파일의 확장자가‘.jpg’ ‘.png’ ‘.gif’ 이 맞다면 
if(file.endsWith(".jpg" || ".png" || ".gif")){
  console.log("딩동댕~");
} else {
  // 결과: “지원되지 않는 파일형식입니다”
  console.log("지원되지 않는 파일 형식입니다");
}
