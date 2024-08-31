function checkNumberInput(field){
  // 정규식에서 *은 0회 이상 반복을 의미함
  // [0-9]라는 숫자 범위를 준 뒤 *을 붙여줌으로써
  // 숫자가 없거나 하나 이상의 숫자가 있음을 의미(숫자가 0개일수도 있으며 빈문자열도 허용)
  let regex1 = /^[0-9]*$/; // 01011111111
  let regex2 = /^\d{3}-\d{4}-\d{4}$/; // 010-1111-1111
  // .test메서드는 정규식이 문자열에 매치되는지 여부를 Boolean타입으로 반환함
  if(regex1.test(field.value) == false){
    // document.getElementById로 value를 가져오는 방식이 아닌
    // 매개변수를 field로 받고 .style로 css스타일을 직접 접근해 borderColor를 변경하는 방식?
    field.style.borderColor = "red";
  } else {
    field.style.borderColor = "";
  }
}