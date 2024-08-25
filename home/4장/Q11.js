const students = [
  { name: "김철수", score: 85, gradeLevel: "1학년" },
  { name: "이영희", score: 92, gradeLevel: "2학년" },
  { name: "박지훈", score: 76, gradeLevel: "3학년" },
  { name: "최유리", score: 88, gradeLevel: "1학년" },
  { name: "정민호", score: 54, gradeLevel: "1학년" },
  { name: "한서연", score: 63, gradeLevel: "2학년" },
  { name: "장동건", score: 71, gradeLevel: "3학년" },
  { name: "오지호", score: 80, gradeLevel: "3학년" },
];

//2)성적에 따라 학생에게 "A", "B", "C"등급을 추가
let gradeMap = students.map((student) => {
  let grade;
  if(student.score >= 90){
    grade = "A";
  } else if(student.score >= 70){
    grade = "B";
  } else {
    grade = "C";
  }

  return {
    name: student.name,
    score: student.score,
    gradeLevel: student.gradeLevel,
    grade: grade,
  }

});

console.log(gradeMap);

//3) 학생들의 성적을 기준으로 내림차순 정렬
let sortScore = gradeMap.sort((a, b) => b.score - a.score);
console.log(sortScore);

//4) 1학년 학생 중에서 등급이 "B"인 학생들을 찾아 점수 총합을 계산
let sumScore = sortScore.filter((sum) => sum.grade == "B" && sum.gradeLevel == "1학년");
console.log(sumScore);

let lastSum = sumScore.reduce((total, stack) =>
  total + stack.score, 0);
console.log(lastSum);



