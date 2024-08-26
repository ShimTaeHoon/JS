let current = new Date();

var year = current.getFullYear();
console.log("year", year);

var month = current.getMonth(); 
console.log("month", month); 

var date = current.getDate();
console.log("date", date) 

var day = current.getDay(); 
console.log("day", day);

var hour = current.getHours(); 
console.log("day", hour);

var minute = current.getMinutes();
console.log("minute", minute);

var second = current.getSeconds();
console.log("second", second);

console.log(year + "-" + (month + 1) + "-" + date + " " + hour + ":" + minute + ":" + second);

console.log("---------");
let after = new Date(2024, 0, 11, 9, 0, 0, 0);
console.log(after);
after.setDate(21);
console.log("10일 후의 날짜: " , after);

const startDate = new Date("2024-01-01");
const add = 10;

startDate.setDate(startDate.getDate() + add);
console.log("10일 후 날짜:", startDate.toLocaleString());

after.getHours(1);
after.setMinutes(30);
console.log("1시간 30분 후의 시간",  after);
