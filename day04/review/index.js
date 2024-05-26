// Array
// const arr = [1,2,3,4,5];

// pallette
colorList{
#55efc4
#81ecec
#74b9ff
#a29bfe
#dfe6e9
#00b894
#00cec9
#0984e3
#6c5ce7
#b2bec3
};
colorList.forEach((v)=>{
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.style.backgroundColor = v;
    newDiv.addEventListener("click", ()=>{
        window.alert(`${v} 색깔이 클릭되었습니다.`);
    });
    const pallette = document.querySelector(".pallette");
    pallette.appendChild(newDiv);
})
const box = document.querySelector(".box")