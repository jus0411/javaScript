//js가 html을 만들기 위한 장소

// h1 태그 만들기
// const h1tag = document.createElement("h1");
// h1tag.innerText = "자바스크립트 수업중";
// document.body.appendChild(h1tag);

//버튼을 만들고, 안의 내용은 클릭! body에 나타내기
// const button = document.createElement("button");
// button.style.backgroundColor = "skyblue";
// button.style.padding = "10px";
// button.style.fontSize = "20px";
// button.innerText = "클릭!";
// document.body.appendChild(button);

// const a = prompt("점심 뭐먹을거?");
// console.log(a);

// const color = prompt("배경색을 뭐로 할까?")
// const box = document.createElement("div");

// box.style.width = "100px";
// box.style.height = "100px";
// box.style.backgroundColor = color
// document.body.appendChild(box);

// const fontColor = prompt("폰트색을 뭐로 할까?")
// const text = prompt("버튼 안 내용 뭐로 할까?")

// const button = document.createElement("button");
// button.style.color = fontColor;
// button.innerText = text;
// document.body.appendChild(button);

const height = prompt("높이?");
const width = prompt("넓이?");
const color = prompt("배경색?");
const text = prompt("내용?");

const button = document.createElement("button");
button.style.height = height;
button.style.width = width;
button.style.backgroundColor = color;
button.innerText = text;
document.body.appendChild(button);
