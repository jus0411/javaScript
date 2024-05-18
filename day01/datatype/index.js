// const 변수이름 = 데이터[기본 + 참조]
// 기본 타입
// 타입 변환

//  1.숫자 타입
// const a = 7(숫자)
// const b = 3.14(숫자)
// const c = 132156465432(숫자)

//  2.문자 타입
// const d = '아메리카노'
// const e = "바닐라라떼"
// const f = `민트초콜렛`

// const g = `내 최애 음료는 : ${e}`
// console.log(g)

// 프롬프트를 이용해서,
// 1. 당신의 MBTI?
// 2. 당신의 최애 음식?
// alert으로 당신의 mbti는~, 최애음식~이군요!

// const mbti = prompt("당신의 MBTI?")
// const food = prompt("당신의 최애 음식?")

// alert(`당신의 mbti는 ${mbti}, 최애 음식은 ${food}이군요!`);

// 오늘의 날짜는 무엇인가요?
// 오늘의 일정은 무엇인가요?
// 오늘의 날짜는 {}고, {}을 하실 에정이시군요!

// const day = prompt("오늘의 날짜는 무엇인가요?");
// const plan = prompt("오늘의 일정은 무엇인가요?");

// alert(`오늘의 날짜는 ${day}이고, ${plan}를 하실 예정이시군요!`);

// 첫번 째 수 입력
// 두번 째 수 입력
// 두 수의 합은 ~입니다.

// const num1 = prompt("첫번 째 수?");
// const num2 = prompt("두번 째 수?");

// const numnum1 = Number(num1);
// const numnum2 = Number(num2);
// alert(`두 수의 합은 ${numnum1+numnum2}입니다!`);

// 1.몇살이세요? -> 20
//  html에 h1태그로 된 2005년이시군요

// const first = prompt("몇 살?");
// const numfirst = Number(first);

//  const fisrtTag = document.createElement("h1")
//  fisrtTag.innerText = `${(2024-first )+1}생 이시군요.`;
// document.body.appendChild(fisrtTag);

// 2. 정사각형의 한변의 길이 -> 10
// html에 정사각형의 넓이는 100입니다.

const length = prompt("정사각형 한변의 길이는?");
const numlength = Number(length);
const lengthTag = document.createElement("h1");

lengthTag.innerText = `정사각형의 넓이는 ${length * length}입니다.`;
document.body.appendChild(lengthTag);
