const file = [".jpg", ".png", ".gif"];

let fullName = "사과.txt";

let index = fullName.lastIndexOf(".");
console.log(index);
let extension = fullName.slice(index);
console.log(extension);

if(extension.includes(file)){
  console.log("올바른 확장자 입니다.")
} else {
  console.log("지원되지 않는 파일 형식입니다.")
};



