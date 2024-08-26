//Q20. 학생 정보를 관리하는 프로그램
// 1) 학생 목록을 Map객체로 생성
let students = new Map();
students.set("김민준", { grade: "2학년", major: "컴퓨터공학" });
students.set("이서윤", { grade: "3학년", major: "경영학" });
students.set("박지호", { grade: "1학년", major: "물리학" });
students.set("최지민", { grade: "4학년", major: "화학" });
students.set("정예린", { grade: "2학년", major: "수학" });
students.set("한지우", { grade: "3학년", major: "영어영문학" });
// 2) 3학년 학생들의 전공을 모두 융합공학으로 변경
for(let [name, value] of students){
  if(value.grade == "3학년"){
    students.set(name, {grade: value.grade, major : "융합공학"});
  }
  console.log(`${name}: ${value.grade}, ${value.major}`);
};
console.log();
console.log("3학년 학생들의 전공을 융합공학으로 변경했습니다");

// 3) 이름이 "정예린"인 학생이 있따면, 해당 학생의 정보를 출력
if(students.has("정예린")){
  let getStu = students.get("정예린");
  console.log(`정예린: ${getStu.grade}, ${getStu.major}`);
}
// 4) 각 학년별로 몇 명의 학생이 있는지 계산하고, 출력
let gradeCount = new Map();
for(let [key, value] of students){
  let grade = value.grade;
  if(gradeCount.has(grade)){
    let count = gradeCount.get(grade);
    gradeCount.set(grade, ++count);
  } else {
    gradeCount.set(grade, 1);
  }
}

console.log("학년별 학생 수:");
for(let [grade, count] of gradeCount){
  console.log(`${grade}: ${count}명`);
}
