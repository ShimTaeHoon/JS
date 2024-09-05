function validate(f){
  let regId = /^[0-9a-z]{4,8}$/;

  if(!regId.exec(f.id.value)){
    alert("아이디는 4~8자 소문자 or 숫자");
    f.id.focus();
    return;
  }

}