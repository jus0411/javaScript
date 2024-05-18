//Event

// const button = document.createElement("button");
// button.innerText = "버튼";

// button.addEventListener("mouseover", () => {
//     console.log("마우스 올라감");
// });
// document.body.appendChild(button);




//div 태크 - width : 100px, height : 100px, bg : red
//  - 클릭 하면 , bg : blue

// const div  = document.createElement("div");
// div.style.height = "100px";
// div.style.width = "100px";
// div.style.backgroundColor = "red";

// div.addEventListener("click", () => {
//     div.style.background = "blue"
// });
// document.body.appendChild(div);

// const div  = document.createElement("div");
// div.style.height = "100px";
// div.style.width = "100px";
// div.style.backgroundColor = "red";

// div.addEventListener("click", () => {
//     div.style.background = "blue"
// });

// document.body.appendChild(div);




// button 태그 만들고, 글은 '파란상자'
//  event 클릭하면, html div w:100, h:100, bg:blue 생김

// const button = document.createElement("button");
// button.innerText = "파란상자";

// button.addEventListener("click", () => {
//   const div = document.createElement("div");
//     div.style.width = "100px";
//   div.style.height = "100px";
//   div.style.margin = "10px";
//   div.style.background = "blue";
//   document.body.appendChild(div);
// });

// document.body.appendChild(button);




// 버튼을 3가지 만들고, 각각 이름은 사이트 색깔 이름 넣기
// div : 100px 100px bg:black
// 각각 클릭하면, 위의 div태그의 bg가 클릭한 이름의 색깔로 변경하기

// const button1 = document.createElement("button");
// button1.innerText = "FUSION_RED";
// const button2 = document.createElement("button");
// button2.innerText = "DESIRE";
// const button3 = document.createElement("button");
// button3.innerText = "HIGH_BLUE";

// const div = document.createElement("div")
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "black";


// button1.addEventListener("click", () => {
//     div.style.backgroundColor = "#fc5c65"
// })
// button2.addEventListener("click", () => {
//     div.style.backgroundColor = "#eb3b5a"
// })
// button3.addEventListener("click", () => {
//     div.style.backgroundColor = "#45aaf2"
// })

// document.body.appendChild(button1);
// document.body.appendChild(button2);
// document.body.appendChild(button3);
// document.body.appendChild(div);



// div w:100 h:100 border:1px solid black, bg:white 
//  button -> 내용 : 색깔 추가
//  button's event -> prompt로 물어봄 색깔 헥사코드 입력
//  button[#~~]을 가진 색깔이 나타남 div의 bg가 변경

const div = document.createElement ("div")
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "white";
div.style.border = "1px solid black";
document.body.appendChild(div);


const addbutton = document.createElement("button");
addbutton.innerText = "색깔 추가";
addbutton.addEventListener("click", () => {
    // 헥사코드 입력 프롬프트 받기
    const hex = prompt("색깔 입력 :");
    const button = document.createElement("button");
    button.innerText = hex;
    button.addEventListener("click",()=>{
        div.style.backgroundColor = hex;
    });
    document.body.appendChild(button);
});

document.body.appendChild(addbutton);