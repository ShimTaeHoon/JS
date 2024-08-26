// Q20. 학생 정보를관리하는프로그램을만들어주세요.
//  1) 학생 목록을 Map 객체로 생성하세요.
let studentList = new Map();

studentList.set("김민준", {grade:"2학년", major:"컴퓨터공학"});
studentList.set("이서윤", {grade:"3학년", major:"경영학"});
studentList.set("박지호", {grade:"1학년", major:"물리학"});
studentList.set("최지민", {grade:"4학년", major:"화학"});
studentList.set("정예린", {grade:"2학년", major:"수학"});
studentList.set("한지우", {grade:"3학년", major:"영어영문학"});

console.log(studentList);
//  2) 3학년 학생들의 전공을 모두융합공학으로 변경하세요.
studentList.forEach(majorMod => {
  if(majorMod.grade == "3학년"){
    majorMod.major = "모두융합공학";
  }; 
});

console.log(studentList);
//  3) 이름이 “정예린”인학생이 있다면, 해당 학생의 정보를 출력하세요.
if(studentList.has("정예린")){
  
}

//  4) 각 학년별로 몇명의 학생이 있는지 계산하고, 출력하세요.
