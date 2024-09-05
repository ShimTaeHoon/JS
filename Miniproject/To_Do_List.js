let listArr = [];
let completeCount = 0;


// 로컬스토리지
// // 1. list-container 아래 div 하나씩 꺼내서 배열에 담기
function saveLocalStorage() {
  localStorage.setItem("listArr", JSON.stringify(listArr));
}

// 1-1. list-container 아래 div들을 꺼낸다
function loadLocalStorage() {
  localStorage.getItem("listArr");
}

// 전체 삭제
function removeAllFunction() {
  let loadList = document.getElementById("list-container");
  loadList.innerHTML = "";
  
  listArr = [];
  completeCount = 0;
  
  countUpdate();

};

function checkedList() {
  // 필드선택자 + 속성선택자
  const checkBoxs = document.querySelectorAll('input[name="listCheck"]');

  completeCount = 0;

  checkBoxs.forEach(checkbox => {
    // parentElement로 부모 Div찾기
    let parentDiv = checkbox.parentElement;

    // querySelector로 자식요소의 인풋, 버튼 요소 찾기
    let textInput = parentDiv.querySelector('input[type="text"]');
    let modBtn = parentDiv.querySelector('button[id="modifyBtn"]');
    let removeBtn = parentDiv.querySelector('button[id="removeBtn"]');

    if (checkbox.checked) {
      textInput.style.textDecoration = "line-through";
      textInput.style.text = "black";
      modBtn.style.textDecoration = "line-through";
      modBtn.style.textDecorationColor = "black";
      removeBtn.style.textDecoration = "line-through";
      removeBtn.style.textDecorationColor = "black";
      completeCount++;

    } else {
      textInput.style.textDecoration = "";
      modBtn.style.textDecoration = "";
      removeBtn.style.textDecoration = "";

    }

  })

  countUpdate();

};

function addList() {
  let plusList = document.getElementById("add-list-input").value;
  listArr.push(plusList);

  // 저장된 목록을 담을 부모 Div의 id값 불러서 초기화
  let loadList = document.getElementById("list-container");

  // 새로운 Div 생성(loadList의 자식div로 생성)
  let newDiv = document.createElement("div");

  // 체크박스 생성
  let checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.name = "listCheck";

  // 변경되는 이벤트가 발생했을 때 checkedList 불러오기
  checkboxInput.addEventListener('change', ()=>{
    checkedList();
  });

  // 텍스트 인풋 박스 생성, plusList에서 value값 가져오기
  let textInput = document.createElement("input");
  textInput.type = "text";
  textInput.value = plusList;
  textInput.readOnly = true;
  textInput.style.backgroundColor = "lightgrey";
  textInput.style.border = "0.5px solid";
  textInput.style.borderRadius = "3px";

  // 수정버튼
  let modifyButton = document.createElement("button");
  modifyButton.id = "modifyBtn";
  modifyButton.textContent = "수정";
  modifyButton.addEventListener('click', function () {
    modifyList(textInput, modifyButton);
  });

  // 삭제버튼
  let removeButton = document.createElement("button");
  removeButton.id = "removeBtn";
  removeButton.textContent = "삭제";

  // newDiv의 목록 삭제
  removeButton.addEventListener('click', function () {
    let checkbox = newDiv.querySelector('input[name="listCheck"]');
    if (checkbox.checked){
      completeCount--;
    }
    listArr.length--;  
    newDiv.remove();
    countUpdate();
  });

  // 함수선언식

  // appendChild로 요소 삽입
  newDiv.appendChild(checkboxInput);
  newDiv.appendChild(textInput);
  newDiv.appendChild(modifyButton);
  newDiv.appendChild(removeButton);

  // 저장 목록에 newDiv(자식 div)추가
  loadList.appendChild(newDiv);

  // 총 개수 업데이트
  countUpdate();

};

// `<div>
//     <input type="checkbox">
//     <input type="text">
//     <input type="button" value="수정">
//     <input type="button" value="삭제">
//    </div>
// `
// loadList.insertAdjacentHTML("beforeend", newRow);
// let removeBtn = document.getElementById('removeAll');

function modifyList(textInput, modifyButton, index) {

  // textInput의 프로퍼티 readOnly가 true일때 [저장]버튼으로 변경
  if (textInput.readOnly) {
    textInput.readOnly = false;
    textInput.style.backgroundColor = "white";
    modifyButton.textContent = "저장";

  } else {
    textInput.readOnly = true;
    textInput.style.backgroundColor = "lightgray";
    modifyButton.textContent = "수정";

    listArr[index] = textInput.value;
    console.log(listArr);

    countUpdate();
  }
};

function countUpdate() {
  // let countQuantity = `총 ${listArr.length} 개`;
  // totalUpdate.textContent = countQuantity;

  let totalUpdate = document.getElementById('totalCount');
  let completeUpdate = document.getElementById('completeCount');

  // completeUpdate.textContent = `${completeCount} 개`;
  
  if(totalUpdate) {
    totalUpdate.textContent = `총 ${listArr.length}개`;
  };

  if(completeUpdate) {
    completeUpdate.textContent = `${completeCount} 개`
  };

};