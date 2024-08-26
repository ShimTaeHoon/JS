// Q28. 다음과 같이 주사위 게임을 만들어 주세요.
//  1) 각 플레이어가 주사위를 3번씩 던집니다.
//  2) 주사위 결과의 합을 계산합니다.
//  3) 두 플레이어의 합을 비교하여 승자를 결정합니다.

// 주사위를 굴리는 함수를 만들자
function diceGame() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(diceGame());


// 주사위의 합을 구하는 함수를 만들어보자(총 3번을 던짐)
// 매개변수의 의미? 이름
function diceSum(player) {
  // 주사위 결과를 담을 배열 생성
  let diceArr = [];
  let sum = 0;
  for(let i = 0; i < 3; i++){
    // sum에 diceGame함수를 호출해서 주사위 값을 누적시켜줌(3회 반복)
    let roll = diceGame();
    diceArr.push(roll);
    sum += roll;
  }
  console.log(`${player}의 주사위 결과 + ${diceArr}`);
  return sum;
}

// 플레이어들 생성
let p1 = diceSum("Player1");
let p2 = diceSum("Player2");

// 플레이어들 주사위 값 비교
function diceVs(){
  if(p1 > p2){
    console.log("Player1의 승리!");
  } else {
    console.log("Player2의 승리!");
  }
}

console.log(diceSum());
console.log(`Player1의 주사위 결과 : ${p1}`);
console.log(`Player2의 주사위 결과 : ${p2}`);
diceVs();


