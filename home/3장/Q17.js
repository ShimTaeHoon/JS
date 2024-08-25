function empArr(arr, grade) {
  let salarySum = 0;
  let empQuantity = 0;
  for (let emp of arr) {
    if (emp.position === grade) {
      salarySum = salarySum + emp.salary;
      empQuantity++;
    }
  }

  return salarySum / empQuantity;
};

const employees = [
  { name: "짱구", position: "부장", salary: 500 },
  { name: "철수", position: "차장", salary: 380 },
  { name: "훈이", position: "사원", salary: 260 },
  { name: "맹구", position: "차장", salary: 420 },
  { name: "유리", position: "사원", salary: 220 },
];

console.log(empArr(employees, "사원"));

