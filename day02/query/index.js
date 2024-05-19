// const a = document.querySelector(".box");
// a.addEventListener
// const b = document.getElementsByClassName(".box");
// console.log(b);

// -0+
// 0이하로는 -가 안되게

const plusBtn = document.querySelector(".plus");
plusBtn.addEventListener("click", () => {
const numSpan = document.querySelector(".num");
numSpan.innerText = Number(numSpan.innerText) + 1;
});

const minusBtn = document.querySelector(".minus");
minusBtn.addEventListener("click", () => {
const numSpan = document.querySelector(".num");
const number = Number(numSpan.innerText) - 1;
numSpan.innerText = number === -1 ? 0 : number;
});

const xMark = document.querySelector(".xMark");
const bar = document.querySelector(".bar");
xMark.style.display = "none"

xMark.addEventListener("click",() => {
     bar.style.display = "block";
     xMark.style.display = "none";
});
bar.addEventListener("click", () => {
        xMark.style.display = "block";
        bar.style.display = "none";
    });