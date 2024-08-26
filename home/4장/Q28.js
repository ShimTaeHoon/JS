//Q28. 주사위 게임
// 1) 각 플레이어가 주사위를 3번씩 던짐
function diceStart(times){
  let diceArr = [];
  for(let i = 0; i < times; i++){
    let dice = Math.floor(Math.random() * 6) + 1;
    diceArr.push(dice);
  }
  return diceArr;
}

let player1 = diceStart(3);
let player2 = diceStart(3);
let player3 = diceStart(3);

// 2) 주사위 결과의 합을 계산
let sum1 = 0;
for(let s of player1){
  sum1 += s;
};
console.log("Player1의 주사위 결과:", player1, "합:", sum1);

let sum2 = 0;
for(let s of player2){
  sum2 += s;
};
console.log("Player2의 주사위 결과:", player2, "합:", sum2);

let sum3 = player3.reduce((sum, diceNumber) =>
  sum + diceNumber,0
);
console.log("Player3의 주사위 결과:", player3, "합:", sum3);

// 3) 두 플레이어의 합을 비교하여 승자 결정
if(sum1 > sum2 && sum1 > sum3){
  console.log("Player1의 승리!");
} else if(sum2 > sum1 && sum2 > sum3) {
  console.log("Player2의 승리!");
} else if(sum3 > sum1 && sum3 > sum1){
  console.log("Player3의 승리!");
}

