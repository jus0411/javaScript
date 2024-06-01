// const friends = ['kim','lee','park'];

// const html = `
//     <h1>My friend</h1>
//     <ul>
//         ${friends.map((v)=>`<li>${v}</li>`).join("")}
//     </ul>
// `;

// document.body.innerHTML = html;

const menu = document.querySelector(".menu");
//afterbegin : 첫 번째 자식 앞에 넣기
// beforeend : 마지막 자식 뒤에 넣기
const friends = ['kim','lee','park'];

const html = `
    <h1>My friend</h1>
    <ul>
        ${friends.map((v)=>`<li>${v}</li>`).join("")}
    </ul>
`;
menu.insertAdjacentHTML('beforeend', html);
menu.insertAdjacentHTML('beforeend', html);
menu.insertAdjacentHTML('beforeend', html);