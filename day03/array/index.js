//  데이터 타입 : 기본[str,num,bool,null,undefined] + 참조
// 참조[array]

const a = [10, 20, 30, 40, 50];
// a[2]
// console.log(a[0]+a[4])

const b = a.push(60);
console.log(b);
const c = a.pop();
console.log(c);

const menu = ["아메리카노", "라떼", "바닐라"]
// 추가
menu.push("민트");
menu.push("딸기스무디");
menu.push("디카페인");

// 갱신
menu[0] = "빅아메리카노";

// 삭제
delete menu[3];
menu.pop();

// forEach 순회[한명씩 보기]
menu.forEach((v)=>{
    console.log(v);
})

const nums = [1,3,5,7,9];
nums.forEach((v)=>{
    console.log(v+10); // 11 13 15 17 19
})
nums.forEach((v)=>{
    console.log(v**v); // 제곱
    
})

console.log(menu);