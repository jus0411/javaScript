// 비동기
// Array, Object, Element, Date
// Promise : 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과값 나타냄
// Promise에서는 상태가 3가지 : 대기중[pending], 성공[Fulfilled], 실패[Rejected]

// const a 성공('탕후루')
// const b 실패('사탕')

// const a = new Promise((success, fail)=>{
//     // 백엔드에 데이터를 가져오는 코드
//     setTimeout(()=>{
//         success("탕후루");
//     }, 3000);
// });
// a.then((v)=>console.log(v));

// const b = new Promise((success,fail)=>{
//     setTimeout(()=>{
//         success({name : 'americano', price:3000});
//     }, 1000);
// });
// b.then((v)=>{
//     v.name = v.name.toUpperCase();
//     return v;
// }).then((v)=>{
//     v.price *= 2;
//     return v;
// })
// .then((v)=>{
//     console.log(v);
// });

// 콘솔로그 찍기