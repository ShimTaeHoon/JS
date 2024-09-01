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

function updateCharacterCount(textarea){
  let maxLength = 30; // 최대 글자수 정해놓기!
  let charCountDiv = document.getElementById('charCount'); // [0/30 글자]가 표시되어 있는 div의 id:charCount
  let currentLength = textarea.value.length; // textarea의 value에 접근해서 길이 가져오기
  // textContent 속성을 사용하면 html에 있는 div부분의 글자가 완전히 새로운 텍스트로 대체가 됨(currentLength + "/" + maxLength + " 글자";)
  charCountDiv.textContent = currentLength + "/" + maxLength + " 글자"; 
  
  // 30글자 초과 시 폰트 색상 변경
  if(currentLength > maxLength){
    textarea.style.color = "red";
    textarea.style.backgroundColor = "black"; // js스타일시트 배경색변경
    textarea.style.fontSize = "20px"; // 폰트크기
    textarea.style.fontWeight = "bold"; // 폰트두께
    textarea.style.fontStyle = "italic"; // 기울임
  } else {
    textarea.style.color = "";
  }

};

function validdateForm() {
  let nameInput = document.getElementById("sname");
  let numberInput = document.getElementById("snumber");
  // radio버튼은 여러개 있기에 getElementByName으로 같은 name을 가진 field들을 선택하여
  // 이 리스트들을 배열처럼 인덱스로 접근하기 위함(fieldInputs.length)
  // fieldInputs에 radio버튼(3개)가 배열 형태로 담기게 됨!
  let fieldInputs = document.getElementsByName("field");
  // 유효성 검사를 위해 isValid를 true로 초기화 시켜놓고
  // 검증 실패 시 false로 변경 시켜줌
  let isValid = true;
  let errorMessage = "";
  
  if(nameInput.value === ""){
    isValid = false;
    errorMessage += "이름을 입력하세요 \n";
  }

  if(numberInput.value === ""){
    isValid = false;
    errorMessage += "연락처를 입력하세요 \n";
  }

  // isFieldSelected를 false로 초기화 해두면 라디오 버튼을 선택하지 않았다는 뜻
  let isFieldSelected = false;
  for(let i = 0; i < fieldInputs.length; i++){
    // 라디오 버튼이 3개이기 때문에(name : field) checked로 체크 된 것을 확인하기 선택되면 true값 반환
    if(fieldInputs[i].checked) {
      isFieldSelected = true;
      break;
    }
  }

  // isFieldSelected가 !연산자를 통해 true가 되는데
  // ★★★왜 isVliad 값을 false로 초기화 하는것인지?..? 이해불가..★★★
  if(!isFieldSelected) {
    isValid = false;
    errorMessage += "지원 분야를 선택해주세요 \n";
  }

  // 검증이 실패되면 위의 코드들에서 erroMessage에 누적 되었던 값이 alert를 통해 띄워짐
  if(!isValid){
    alert(errorMessage);
  }
}




