//condition [조건]
// const a = Number(prompt("숫자입력:"));
// if(a > 0){
//     alert("0보다 큽니다.");
// }
// else if(a == 0){
//     alert("0입니다.");
// }
// else{
//     alert("0보다 작습니다.");
// }

// prompt로 영어점수 입력받고
// 90점 이상 'a'
// 80점 이상 'b'
// ...
// 60점 미만 '나락'

// const score = Number(prompt("영어점수를 입력하세요."));

// if(score >= 90){
//     alert("a등급 입니다.");
// }
// else if(score >= 80){
//     alert("b등급 입니다.");
// }
// else if(score >= 70){
//     alert("c등급 입니다.");
// }
// else if(score >= 60){
//     alert("d등급 입니다.");
// }
// else{
//     alert("나락");
// }


// 유저에게 비밀번호 설정을 물어보고,
// 1. 비밀번호 길이가 8글자 이상이고, //비밀번호가 짧습니다.
// 2. 특수문자 !,#,$가 하나 들어가야 하고, //특수문자 !#$가 없습니다.
// 3. I로 시작하고, T로 끝나야하고 //I와T를 꼭 시작과 끝에 넣어야합니다.
// 위의 조건을 모두 통과하면 비밀번호 설정완료! 

 const password = prompt("비밀번호를 설정하시겠습니까?");
 const isLengthOver8 = password.length >= 8;
 const hasSpecialChar = ["!","#","$"].some((v)=>{
    return password.includes(v);
 });
 const inValidIT = password.startsWith("I") && password.endsWith("T");

 if(isLengthOver8){
     alert("비밀번호가 짧습니다.");
 }
 else if(hasSpecialChar){
     alert("특수문자 !#$가 없습니다.");
 }
 else if(inValidIT){
     alert("I와T를 꼭 시작과 끝에 넣어야합니다.");
 }
 else{
     alert("비밀번호 설정이 완료되었습니다.");
 }



const special = ["!","#","$"]

special.some((v)=>{
    return v == "$";
});

special.every((v)=>{
    return v == "!";
});

const number = [1,2,3,4,5];

number.some((v)=>{
    return v > 4;
});

number.every((v)=>{
    return v < 6;
});