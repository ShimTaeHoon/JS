// Q. 단어 여러개를 입력받아 하나의 문장으로 만드는 함수를 정의하세요.
// 단, 첫 번째 단어는 무시하고 나머지 단어들로만 문장을 만드세요.

function createSentence(one, ...rest){
  let sumSentence = rest.join(" ");
  return sumSentence;
}

console.log(createSentence("Hello", "this", "is", "JavaScript"));