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

  // if (!isValid)
  if (isValid == false){
    alert(errorMessage);
    return;
    // js에서 return문은 함수의 실행을 즉시 종료하는 것임
    // 아래 addItemToCart를 통해 장바구니에 추가하는 기능을 만드는데 isValid검증에 실패하면 추가하지 않기 위해 return
  }

  // 장바구니에 추가하는 addItemToCart함수의 매개변수에
  // getById를 통해 input에 입력 된 아이템들의 value값을 매개변수로 전달해주며 추가함
  addItemToCart(itemName.value.trim(), parseInt(itemQuantity.value), parseFloat(itemPrice.value));

}

// addItemToCart에 name,quantity,price을 추가하기(장바구니 추가)
function addItemToCart(name, quantity, price){
  let cartList = document.getElementById("cartList"); // cartList인 ul을 Id값으로 가져옴
  // 속성 선택자(querySelector)를 사용해 상품이 있는지 확인하기 li[data-name="바나나"]
  // 문서에서 첫 번째로 일치하는 요소를 반환함(일치하는 요소가 없을시 null 반환)
  // 쿼리셀렉터는 단일 요소만 선택가능
  // li -> 선택할 HTML요소의 타입 지정
  // data-name이라는 data-* 속성은 특정값과 일치하는 요소를 선택하는 선택자
  // ex) li data-name="example"과 같이 요소에 data-name속성을 추가하고 js에서 값을 읽거나 수정할 수 있음
  // ${name}부분은 템플릿 리터럴을 사용하여 name 변수를 동적으로 삽입

  // ★★★그런데 li는 존재하지 않는다..? 어째서?★★★
  // 
  let existingItem = document.querySelector(`li[data-name="${name}"]`);

  // existingItem이 존재하면 true반환 존재하지 않으면 null반환함
  if(existingItem) {
    // .itemQuntity는 쿼리셀렉터에서 클래스select를 통해 가져옴
    // ★★★그런데 html에서 itemQuantity라는 클래스는 존재하지 않음...★★★
    // else에서 장바구니에 존재하지 않을때 insertAdjacentHTML을 사용하여
    // li를 통한 목록 생성을 한 것으로 추정
    let existingQuantity = existingItem.querySelector(".itemQuantity");
    let exsitingPrice = existingItem.querySelector(".itemPrice");

    // textContent는 HTML요소의 텍스트 콘텐츠를 읽거나 수정하는데 사용되는 속성
    // HTML태그를 포함하지 않고 순수한 텍스트만을 다룸
    // 그냥 호출만 하면 읽기, 새로운값으로 초기화하면 수정
    let newQuantity = parseInt(existingQuantity.textContent) + quantity;
    // toFixed는 Number객체에서 제공하는 메서드, 숫자를 고정된 소수점 자리로 포맷팅함
    let newPrice = (parseFloat(exsitingPrice.textContent) + (quantity * price)).toFixed(2);

    existingQuantity.textContent = newQuantity;
    exsitingPrice.textContent = newPrice;
  } else {
    // 존재하지 않는 경우에 새로운 항목을 추가하기
    // 완전한 엘리먼트 형태의 문자열을 만들기
    // 중간중간 콘솔창에서 확인해보기
    // HTML문자열을 동적으로 생성하는 코드
    // 템플릿 리터럴을 사용하여 문자열 내에서 변수값을 삽입
    // data-* 속성은 사용자 정의 데이터를 HTML요소에 추가할 때 사용됨
    let newItem = `<li data-name ="${name}"> ${name} - <span class="itemQuantity">
    ${quantity}</span>개 <span class="itemPrice">${(quantity * price).toFixed(2)}
    </span>원 <button onclick="removeItem(this)">제거</button></li>`;
                                        //this는 클릭된 버튼 자신

    // ★★★
    // 브라우저에서 개발자도구 열어서 콘솔창에 실시간으로 확인해서 코드 만들기 ▼▼▼
    // f12에서 new Item에 걸려 있는 상태에서 콘솔창 !!!
    // ★★★

    // cartList.insertAdjacentHTML("beforeend", 
    //          <key> = <value>
    // `<li data-name = "${name}"> - <span class="itemQuantity">
    //   ${quantity}</span>개 <span>${quantity * price}</span>원  
    //   <button onclick="removeItem(this)">제거</button></li>`);
    // --------------> new Item변수를 하나 선언해서 초기화 시켜주기!!!
    // ★★★
    
    // HTML문서에서 id가 cartList인 요소를 가져오기
    // insertAdjacentHTML을 통해 지정된 위치에 HTML문자열 삽입
    // beforeend는 cartList의 자식으로 HTML을 삽입하되, 마지막 자식 요소 뒤에 삽입됨(리스트의 맨 끝에 삽입)
    cartList.insertAdjacentHTML("beforeend", newItem);

  }

  updateTotal();

}

// 제거 버튼 함수
function removeItem(button){
  // parentElement는 DOM에서 사용되는 프로퍼티 중 하나로 특정 요소의 부모 요소를 참조함
  // element(button)이 부모요소가 없거나 element가 최상위 요소일 경우 parentElement는 null을 반환함
  // newItem에서 동적으로 코드를 생성 했기에, 여기서 부모 요소는 li가 되고 li리스트를 삭제함(remove())
  let listItem = button.parentElement;
  listItem.remove();
  updateTotal();
}

// 토탈 업데이트 함수
function updateTotal() {
  let cartList = document.getElementById("cartList");
  let totalQuantity = 0;
  let totalPrice = 0.0;

  // 전체 수량 계산하기!
  // querySelctorAll을 사용하여 cartList 내에 .itemQuantity 클래스를 가진 [모든] 요소를 선택
  // 이 메서드는 선택된 요소들을 노드리스트로 반환함(노드리스트는 배열처럼 동작)
  // .itemQuantity를 가진 모든 span요소들이 포함됨
  cartList.querySelectorAll(".itemQuantity").forEach(function(quantitySpan){
    // textContent를 통해 quantitySpan(span요소들)의 텍스트 콘텐츠를 문자열로 반환하여
    // 수량을 정수형태(parseInt)로 totalQuantity에 누적시킴
    totalQuantity += parseInt(quantitySpan.textContent);
  });

  // 위 함수와 동일한 방식으로 itemPrice 요소를 전부 찾아 forEach문을 통해 반복 작업 수행
  // totalPrice에 itemPrice요소들을 textContent를 통해 문자열 형태로 받아 누적시킴
  cartList.querySelectorAll(".itemPrice").forEach(function(priceSpan){
    totalPrice += parseFloat(priceSpan.textContent);
  });

  document.getElementById("totalQuantity").textContent = totalQuantity;
  document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
}