//Q7-1
let star = "*";
for (let i = 1; i < 4; i++) {
  let row = "";
  for (let j = 1; j < 6; j++) {
    row += star;
  }
  console.log(row);
}

//Q7-2
let star2 = "*";
for (let i = 1; i < 6; i++) {
  let row = "";
  for(let j = 0; j < i; j++){
    row += star2;
  }
  console.log(row);
}


