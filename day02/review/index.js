//  1. 두 수를 따로 각각 입력받고, 합 차 곱을 html에
// h2태그로 3개 각각 나타내기, 폰트색은 하늘색

// const num1 = prompt("첫번째 수를 입력하세요");
// const num2 = prompt("두번째 수를 입력하세요");

// const numnum1 = Number(num1);
// const numnum2 = Number(num2);

// const plusTag = document.createElement("h2");
// const minusTag = document.createElement("h2");
// const mulTag = document.createElement("h2");

// plusTag.style.backgroundColor = "skyblue";
// minusTag.style.backgroundColor = "skyblue";
// mulTag.style.backgroundColor = "skyblue";

// plusTag.innerText = `두 수의 합은 ${numnum1 + numnum2}입니다.`;
// minusTag.innerText = `두 수의 합은 ${numnum1 - numnum2}입니다.`;
// mulTag.innerText = `두 수의 합은 ${numnum1 * numnum2}입니다.`;

// document.body.appendChild(plusTag);
// document.body.appendChild(minusTag);
// document.body.appendChild(mulTag);

//  2. 밑변과 높이를 각각 입력받고, 삼각형 넓이를
//  html에 div태그로 나타내기, 폰트사이즈는 20px, 폰트 색은 초록색

// const num1 = prompt("밑변의 길이를 입력하세요");
// const num2 = prompt("높이를 입력하세요");

// const numnum1 = Number(num1);
// const numnum2 = Number(num2);

// const Triangle = document.createElement("div");
// Triangle.innerText = `넓이 : ${(numnum1 * numnum2)/2}`

//  - 0 + 형태의 counter만들기

const button1 = document.createElement("button");
const num = document.createElement("span");
const button2 = document.createElement("button");

button1.innerText = `-`;
num.innerText = `0`;
button2.innerText = `+`;

button1.addEventListener("click", () => {
  num.innerText = Number(num.innerText) - 1;
});

button2.addEventListener("click", () => {
  num.innerText = Number(num.innerText) + 1;
});

document.body.appendChild(button1);
document.body.appendChild(num);
document.body.appendChild(button2);
