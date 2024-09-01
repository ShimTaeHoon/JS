// 상품수량 유효성 검사하기
function validdateQuantity(field) {
  let regex = /^[0-9]*$/; // 0~9까지 숫자만 허용 *을 써주어서 0개 이상의 숫자가 들어옴을 의미
  if (regex.test(field.value) == false) {
    field.style.borderColor = "red";
  } else {
    field.style.borderColor = "";
  }
}

// 상품가격 유효성 검사하기
function validdatePrice(field) {
  let regex = /^[0-9]*$/;
  if (regex.test(field.value) == false) {
    // if(!regex.test(field.value)) << ! 부정연산자로도 가능
    field.style.borderColor = "red";
  } else {
    field.style.borderColor = "";
  }
}

function validdateAndAddItem() {
  let itemName = document.getElementById("itemName");
  let itemQuantity = document.getElementById("itemQuantity");
  let itemPrice = document.getElementById("itemPrice");
  let isValid = true;
  let errorMessage = "";

  if (itemName.value.trim() === "") {
    isValid = false;
    errorMessage += "상품 이름을 입력해줏요. \n";
  }

  // parseInt를 통해 문자열값이 정수로 변환할때 음수값인 경우 조건문에 들어감
  if (itemQuantity.value.trim() === "" || isNaN(itemQuantity.value) || parseInt(itemQuantity.value) <= 0) {
    isValid = false;
    errorMessage += "유효한 수량을 입력해주세요. \n";
  }

  if (itemPrice.value.trim() === "" || isNaN(itemPrice.value) || parseFloat(itemPrice.value) <= 0) {
    isValid = false;
    errorMessage += "유효한 가격을 입력해주세요. \n";
  }

  if (!isValid){
    alert(errorMessage);
    return;
    // js에서 return문은 함수의 실행을 즉시 종료하는 것임
    // 아래 addItemToCart를 통해 장바구니에 추가하는 기능을 만드는데 isValid검증에 실패하면 추가하지 않기 위해 return
  }

}