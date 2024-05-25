const fruits = ["apple","bannana","orange","melon","kiwi"]

fruits.forEach((v)=>{
    console.log(`${v} a를 포함 ${v.includes("a") ? "포함" : "미포함"}`);
});

// 6글자이상이면 대문자화, 아니면 해당단어를 두번 반복한 단어로 표시

fruits.forEach((v)=>{
    const isSixOver = v.length >= 6;
    const result = isSixOver ? v.toUpperCase() : v + v;
    console.log(result);
})

// 자기 길이만큼 그단어 중복해서반복

fruits.forEach((v)=>{
    console.log(v.toUpperCase().repeat(v.length));
});