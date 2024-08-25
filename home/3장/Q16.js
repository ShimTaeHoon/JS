function studentAvg(stu, sub){
  let totalScore = 0;
  let stuQuantity = stu.length;

  for(let student of stu){
    totalScore = totalScore + student[sub];
  }

  return totalScore / stuQuantity;

};

const students = [
  { name: "둘리", math: 90, english: 85, a:100 },
  { name: "또치", math: 80, english: 95, a:30},
  { name: "도우너", math: 70, english: 75, a:10},
];

console.log(studentAvg(students, "math"));
console.log(studentAvg(students, "english"));
console.log(studentAvg(students, "a"));
console.log(students[0].math);