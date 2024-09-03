let listArr = [];

function addList() {
  let plusList = document.getElementById("add-list-input").value;

  listArr.push(plusList);

  let loadList = document.getElementById("list-container");

  let newDiv = document.createElement("div");

  let checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.name = "listCheck";

  let textInput = document.createElement("input");
  textInput.type = "text";
  textInput.value = plusList;

  let modifyButton = document.createElement("button");
  modifyButton.textContent = "수정";

  let removeButton = document.createElement("button");
  removeButton.id = "removeBtn"
  removeButton.textContent = "삭제";

  removeButton.addEventListener('click', function(){
    newDiv.remove();
  });

  newDiv.appendChild(checkboxInput);
  newDiv.appendChild(textInput);
  newDiv.appendChild(modifyButton);
  newDiv.appendChild(removeButton);

  loadList.appendChild(newDiv);

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

function removeAllFunction() {
  let loadList = document.getElementById("list-container");
  
  loadList.innerHTML = "";

  listArr = [];
};



