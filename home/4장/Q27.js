//Q27. 주사위 10번 던지고 배열에 저장
let diceArr = [];
for(let i = 0; i < 10; i++){
  let dice = Math.floor(Math.random() * 6) + 1;
  diceArr.push(dice);
};
console.log(diceArr);


