// Operator[연산자]
// 산술 연산자
// 할당 연산자[=, +=, -=, *=, **=, /=, %=]
let b = 4;
b += 5; // 9 [b = b + 5]
b -= 4; // 5 [b = b - 4]

// 비교 연산자 : boolean으로 귀결됨
// >, <, <=, >=, ==(같다), !=(다르다)
// ===[타입까지 같다], 
const c = 5 > 3
const c1 = 5 == 4 // false
const c2 = 5 != 4 // true
const c3 = 5 === 4 // false

// 논리 연산자
// &&[and], ||[or], ![not]
// && : 모두 true 일 때 true
// || : 하나라도 true 일 때 true
const d = 5 > 0 && 3 > 0 && 0 == "0"; //true
const d1 = 5 > 0 && 3 > 0 && 0 === "0"; //false
const d2 = 5 > 0 || 3 > 0 || 0 == "0"; //true
const d3 = !true  //false
const d4 = !"happy" //false
const d5 = !!"happy" //true [암묵적 타입 캐스팅]

// 삼항 연산자
// 조건 ? A : B
const height = Number(prompt("키 몇?"))
const e = height >= 140? "탑승 가능" : "불가능";

// es6 이후 연산자
// 1.typeof
console.log (typeof true) //boolean
console.log (typeof e)    //string

// 2. Nullish ??
const h = prompt("아무거나 입력");
console.log(h ?? "입력하라고");
console.log("아메리카노" ?? "재고없음");
console.log(null ?? "재고없음");
console.log(undefined ?? "재고없음");

// 단축 평가[short-circuit]

true || "dog" // true
false || "dog" // "dog"
true && "dog" // "dog"
false && "dog" // false