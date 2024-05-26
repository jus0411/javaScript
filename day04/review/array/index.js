const arr = [1, 3, 5, 7, 9];
const fruits = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "tomato",
  "grape",
  "strawberry",
];

// forEach, every, some
//  map(바꾸기)
const a1 = arr.map((v) => v * 10);
const a2 = arr.map((v) => v ** v);
const a3 = arr.map((v) => (v < 6 ? v + 10 : v * 10));

// 짝수 2배 홀수 3배
const a4 = arr.map((v, i) => {
  i % 2 == 1 ? v * 3 : v * 2;
});

// 알파벳 a포함되면 대문자화 시키고, 아니면 단어의 길이로 바꾸기

const a5 = fruits.map((v) => (v.includes("a") ? v.toUpperCase() : v.length));

// filter
const b1 = arr.filter((v) => v > 5);

const b2 = arr.filter((v, i) => !(i % 2));

// 과일에서 6글자 이상인 애들만 걸러주고, 대문자화 시키기

const b3 = arr.filter((v) => v.length >= 6).map((v) => v.toUpperCase());

const alpha = ["a", "b", "c", "d", "e", "f", "g", "h"];

const b4 = arr
  .filter((v) => v.length == 6)
  .every((v) => alpha.some((x) => v.includes(x)));

const c = Array(10); //
const c1 = Array(10).fill(0);
const c2 = Array(10)
  .fill(0)
  .map((v, i) => i);
const c3 = Array(101)
  .fill(0)
  .map((v, i) => i)
  .filter((v) => v % 2);

// str - array
// 방법 : split,Array.from
const d = "americano".split("");
const d1 = Array.from("americano");
const d2 = [..."americano"];
const d3 = [..."americano"].filter((v) => v != "a");

// array -> str
const e = ["coffee", "cookie"].join("");
const e1 = ["coffee", "cookie"].toString();

// "cccCCC" -> "CCCccc"
const change = (word) =>
  [...word]
    .map((v) => (v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join("");
console.log(change);

// n  k result
// 10 3 [3,6,9]
// 15 5 [5,10,15]
// 12 4 [4,8,12]

const makeArr = (n, k) =>
  Array(n)
    .fill(0)
    .map((v, i) => i + 1)
    .filter((v) => v % k == 0);

console.log(makeArr);

const a = [1, 2, 3, 4, 5];
const result1 = a.reduce((acc, curr) => {
  console.log(`acc:${acc} curr:${curr}`);
  return acc + curr;
});

console.log(result1);

Array(100)
  .fill(0)
  .map((v, i) => i + 1)
  .reduce((acc, curr) => acc + curr);

const fruits1 = ["apple", "banana", "orange", "kiwi", "tomato"];

const result = fruits1
  .map((v) =>
    [...v].filter((v1) => ![..."aeiou"].some((v2) => v2 == v1)).join("")
  )
  .reduce((acc, cur) => acc + cur);
console.log(result);
