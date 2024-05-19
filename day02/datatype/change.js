//  div: w:100 h:100 bg:아무거나
// -,+ 에 따라 div가 유동적으로 넓/높이가 변하는 프로그램

const div = document.createElement("div");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");

div.style.width = "100px";
div.style.height = "100px";
div.style.background = "skyblue";
document.body.appendChild(div);

button1.innerText = "-";
button2.innerText = "+";
button3.innerText = "-";
button4.innerText = "+";

button1.addEventListener("click", () => {
  div.style.width = parseInt(div.style.width) - 10 + "px";
});

button2.addEventListener("click", () => {
  div.style.width = parseInt(div.style.width) + 10 + "px";
});

button3.addEventListener("click", () => {
  div.style.height = parseInt(div.style.height) - 10 + "px";
});

button4.addEventListener("click", () => {
  div.style.height = parseInt(div.style.height) + 10 + "px";
});

document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
document.body.appendChild(button4);
