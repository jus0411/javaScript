// 변수(variable) : 데이터를 기억하는 공간, 닉네임
// const 이름 = 데이터
// let 이름 = 데이터 [기억 여러번]
// var 이름 = 데이터 [절대절대 쓰지말기]

// const a =100;
// a = 200; (x)

// let b = 100;
// b = 200; (o)

// 인간 : 연산[뇌] + 기억[뇌]
// 컴퓨터 : 연산[CPU] + 기억[RAM]

// 변수 이름 문법
// 1. 예약어[키워드] 안됨! ex) const const
// 2. 특수문자 안됨 _(언더바) 빼고
// 3. 띄어쓰기 안됨 ex) const mintchoco
// 4. 숫자로 시작안됨 ex) 1a(x) a1(o)
// 5. 변수이름 중복 안됨

// 변수 이름 국룰
// 1. 의미있는 단어로 사용 ex) const a(x), const button(x), white_button(o)
// 2. 두 단어 합칠 때, 낙타표기법, 뱀표기법 사용
// - 낙타 : milkCoffee(두번째에 대문자)
// - 뱀 : milk_coffee
// 3. 소문자로 시작하기

// const a = 1;    a는 1
// const b = "사이다"   b는 사이다

const text = prompt("무슨 내용?");
const color = prompt("무슨 색?");

const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");
h1.style.backgroundColor = color;
h1.innerText = text;
h2.style.backgroundColor = color;
h2.innerText = text;
h3.style.backgroundColor = color;
h3.innerText = text;

document.body.appendChild(h1);
document.body.appendChild(h2);
document.body.appendChild(h3);

const tag = prompt("무슨 태그?");
const text1 = prompt("무슨 내용?");
const color1 = prompt("폰트 무슨 색?");

const madeTag = document.createElement(tag);
madeTag.style.fontColor = color1;
madeTag.innerText = text1;
document.body.appendChild(madeTag);
