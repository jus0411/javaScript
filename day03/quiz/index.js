// const fruits = ["사과","오렌지","파인애플","키위","망고","아보카도"]

// 사과 버튼
// 오렌지 버튼
// ...

// fruits.forEach((v)=>{
//     const btn = document.createElement("button");
//     btn.innerText = v;
//     btn.addEventListener("click", ()=>{
//         window.alert(`${v}과일이 클릭되었습니다.`);
//     });
//     document.body.appendChild(btn);
// });


const coffee = ["아메리카노 3000","라떼 4000","바닐라 5000"]

coffee.forEach((v)=>{
    const btn = document.createElement("button");
    btn.innerText = v;
    btn.addEventListener("click",()=>{
        const total = document.querySelector(".total")
        const price = Number(v.split(" ")[1])
        total.innerText = Number(total.innerText) + price;
    });
    document.body.appendChild(btn);
});