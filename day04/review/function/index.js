// 함수 : input[str,bool,element,null] -> output[str,bool,element,null]

// function hello(x){
//     return `${x} 안녕!`;
// }

// const a = hello("홍길동"); //홍길동 안녕!
// const b = hello("JS"); //js 안녕!
// console.log(a);
// console.log(b);

// 1.x를 넣으면 +100 돌려주는 함수
function plus(x){
    return x+100;
}

// 2.x를 넣으면 대문자화 시키고 +''돌려주는 함수
function upperEmoji(x){
    return x.toUpperCase() + '^^'
}

const c = plus(300); //400
const d = upperEmoji("apple"); //apple^^
console.log(c);
console.log(d);

// 3. 배열 x를 넣으면 두번째 원소를 돌려주기
function getSecond(x){
    return x[1];
}
// 4.x를 넣으면 + 럭키비키잖앙을 붙혀서 돌려주기
function lucky(x){
    return x + "럭키비키잖앙";
}

const e = getSecond(["apple","banana"]);
const f = lucky("오늘 일요일 수업인데");
console.log(e);
console.log(f);