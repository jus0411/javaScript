const id = document.querySelector(".id");
const password = document.querySelector(".password");
const passwordCheck = document.querySelector(".passwordCheck");

id.addEventListener("input", (e) => {
    if(id.includes('!','@','#','$','%','^','&','*')){
        info1.innerText = '아이디설정이 올바릅니다.';
    }else{
        info1.innerText = '올바르지 않습니다.';
    }

    const {length} = e.target.value;
    const isValidLength = 4 <= length && length <= 12;
    const color = isValidLength ? "green" : "red";
    info2.style.color = color;
    if(length < 4){
        info2.innerText = '글자가 짧습니다.';
    }else if(12 < length){
        info2.innerText = '글자가 깁니다.';
    }else{
    info2.innerText = '글자가 충분합니다.';
    }
});

password.addEventListener("input", (e) => {
    const b = info3.filter
    if(password.includes('!','@','#','$','%','^','&','*')){
        info3.innerText = '비밀번호설정이 올바릅니다.';
    }else{
        info3.innerText = '올바르지 않습니다.';
    }

    const {length} = e.target.value;
    const isValidLength = 4 <= length && length <= 12;
    const color = isValidLength ? "green" : "red";
    info4.style.color = color;
    if(length < 4){
        info4.innerText = '글자가 짧습니다.';
    }else if(12 < length){
        info4.innerText = '글자가 깁니다.';
    }else{
    info4.innerText = '글자가 충분합니다.';
    }
});

passwordCheck.addEventListener("input", (e) => {
    if(passwordCheck == password){
        info5.innerText = '비밀번호 확인 일치!';
    }else{
        info5.innerText = '비밀번호설정을 다시 확인해주세요';
    }
});