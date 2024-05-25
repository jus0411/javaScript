// Counter -10 ~ 10
// - +
// [10,-10]: Red 그 외는 Black
const plusBtn = document.querySelector(".plus");
const result = document.querySelector(".result");
const minusBtn = document.querySelector(".minus");

plusBtn.addEventListener("click", () =>{
    const num = Number(result.innerText)
    const newNum = num <10 ? num+1 : num;
    result.innerText = newNum;
    result.style.color = newNum == 10 ? "red" : "black";
})

minusBtn.addEventListener("click", () =>{
    const num = Number(result.innerText)
    const newNum = num > -10 ? num-1 : num;
    result.innerText = newNum;
    result.style.color = newNum == -10 ? "red" : "black";
})
