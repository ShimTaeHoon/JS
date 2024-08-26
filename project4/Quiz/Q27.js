// Q27. 주사위를 10번 던지고, 각 결과를 배열에 저장하세요
// 주사위 결과를 담을 배열 생성
let diceArr = [];

function diceRepeat() {
  // 주사위 10번 굴리기
  for (let i = 0; i < 10; i++) {
    let dice = Math.floor(Math.random() * 6) + 1;
    // diceArr에 랜덤값(주사위) 넣기
    diceArr.push(dice);
    
  }
  return console.log(`10번 던진 결과: ${diceArr}`);
}

diceRepeat();




