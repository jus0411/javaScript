// number *4개붙이고 나머지 숫자
// exp : 2024/07/25 바꾸기
// 서버터지면 alert으로 서버터짐 뜨기

const getData = fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=10");

getData
  .then((v) => v.json())
  .then((v) => v.data)
  .then((v) =>
    v.forEach(({type,number, expiration, owner }) =>
      bindData(type,number, expiration,owner)
    )
  )
  .catch((v) => console.log("너무 많이 보내지마세용"));

const bindData = (type,number, expiration, owner) => {
  const table = document.querySelector(".table");
  const maskednumber = "****"+[...number].slice(4,number.length).join("");
  const date = new Date();
  const newExp = date.getFullYear() + "/" + expiration;


  table.insertAdjacentHTML(
    "beforeend",
    `
        <div class="table_data">
            <div class="type">${type}</div>
            <div class="maskednumber">${maskednumber}</div>
            <div class="expiration">${newExp}</div>
            <div class="owner">${owner}</div>
        </div>
        `
  );
};