//  아메리카노 2500 : -0+
//  라떼 3000 : -0+
//  바닐라 3500: -0+
//  총액: 0

const button1 = document.createElement("button");
const coffee1 = document.createElement("span");
const num1 = document.createElement("span");
const button2 = document.createElement("button");

coffee1.innerText = `아메리카노 2500`;
button1.innerText = `-`;
num1.innerText = `0`;
button2.innerText = `+`;

button1.addEventListener("click", () => {
  num1.innerText = Number(num1.innerText) - 1;
});

button2.addEventListener("click", () => {
  num1.innerText = Number(num1.innerText) + 1;
});

document.body.appendChild(coffee1);
document.body.appendChild(button1);
document.body.appendChild(num1);
document.body.appendChild(button2);

const button3 = document.createElement("button");
const coffee2 = document.createElement("span");
const num2 = document.createElement("span");
const button4 = document.createElement("button");

coffee2.innerText = `라떼 3000`;
button3.innerText = `-`;
num2.innerText = `0`;
button4.innerText = `+`;

button3.addEventListener("click", () => {
  num2.innerText = Number(num2.innerText) - 1;
});

button4.addEventListener("click", () => {
  num2.innerText = Number(num2.innerText) + 1;
});

document.body.appendChild(coffee2);
document.body.appendChild(button3);
document.body.appendChild(num2);
document.body.appendChild(button4);

const button5 = document.createElement("button");
const coffee3 = document.createElement("span");
const num3 = document.createElement("span");
const button6 = document.createElement("button");

coffee3.innerText = `바닐라 3500`;
button5.innerText = `-`;
num3.innerText = `0`;
button6.innerText = `+`;

button5.addEventListener("click", () => {
  num3.innerText = Number(num3.innerText) - 1;
});

button6.addEventListener("click", () => {
  num3.innerText = Number(num3.innerText) + 1;
});

document.body.appendChild(coffee3);
document.body.appendChild(button5);
document.body.appendChild(num3);
document.body.appendChild(button6);

const button7 = document.createElement("button");
const total = document.createElement("span");

button7.innerText = `계산`;
total.innerText = `0`;

button7.addEventListener("click", () => {
  total.innerText =
    Number(num1.innerText * 2500) +
    Number(num2.innerText * 3000) +
    Number(num3.innerText * 3500);
});

document.body.appendChild(button7);
document.body.appendChild(total);
