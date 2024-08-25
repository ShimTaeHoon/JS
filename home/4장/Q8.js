let string = "hello world welcome to programing";

let arr = string.split(" ");
console.log(arr);

let newText = "";
for(let v of arr){
  for(let s in v){
    if(s == 0){
      newText += v[s].toUpperCase();
    } else {
      newText += v[s];
    }
  }
  newText += " ";
}

console.log(newText);
console.log("---------");

var text = "hello world welcome to programming";

var arr2 = text.split(" ");
var newArr = [];

// for (let word of arr2) {
//   newArr.push(word.charAt(0).toUpperCase() + word.slice(1));
// }
// console.log(newArr);
// console.log("------------");

for (let word of arr2) {
  newArr.push(word.charAt(0).toUpperCase() + word.slice(1));
}
console.log(newArr);

let newText2 = newArr.join(" ");
console.log(newText2);
