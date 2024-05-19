//프롬프트에 아무것도 넣지않으면, 아무것도 입력 안했어요!

// 1.영어점수를 입력받고, 60점 이상이면 합격입니다. 아니면 불합격입니다.
const score = Number(prompt("영어점수는?"));
console.log(score ?? "아무것도 입력 안했어요!");
const a = score >= 60 ? "합격" : "불합격";
console.log(`영어 합격여부 : ${a} 입니다.`);

// 2.정수를 입력받고, 양수인지 음수인지 알려주기
const num = Number(prompt("정수를 입력하세요"));
console.log(num ?? "아무것도 입력 안했어요!");
const b = num > 0 ? "양수" : "음수";
console.log(`${num} : ${b} 입니다.`);

// 3.두 정수를 입력 받고, 큰 수를 출력하기
const num1 = Number(prompt("정수를 입력하세요"));
const num2 = Number(prompt("정수를 입력하세요"));
console.log(num1 ?? "아무것도 입력 안했어요!");
console.log(num2 ?? "아무것도 입력 안했어요!");
const c = num1 > num2 ? num1 : num2;
console.log(`더 큰 수는 : ${c} 입니다.`);

//4.정수를 입력받고, 절대값으로 바꾸기
const num3 = Number(prompt("정수를 입력하세요"));
console.log(num3 ?? "아무것도 입력 안했어요!");
const d = num3 > 0 ? num3 : -num3;
console.log(`입력한 정수의 절대값은 : ${d} 입니다.`);

//5.정수를 입력받고, 홀수인지 짝수인지 알려주기
const num4 = Number(prompt("정수를 입력하세요"));
console.log(num4 ?? "아무것도 입력 안했어요!");
const e = num4 % 2 == 1 ? "홀수" : "짝수";
console.log(`정수는 : ${e} 입니다.`);

//
const userName = prompt("이름 입력:") || "Guest"
console.log(`이름: ${userName}`);

