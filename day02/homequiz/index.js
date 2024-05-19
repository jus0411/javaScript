const buyBtn1 = document.querySelector(".coffee1");
buyBtn1.addEventListener("click", () => {
  const numSpan = document.querySelector(".total");
  numSpan.innerText = Number(numSpan.innerText) + 3000;
});

const buyBtn2 = document.querySelector(".coffee2");
buyBtn2.addEventListener("click", () => {
  const numSpan = document.querySelector(".total");
  numSpan.innerText = Number(numSpan.innerText) + 3500;
});

const buyBtn3 = document.querySelector(".coffee3");
buyBtn3.addEventListener("click", () => {
  const numSpan = document.querySelector(".total");
  numSpan.innerText = Number(numSpan.innerText) + 4000;
});

const buyBtn4 = document.querySelector(".reset");
buyBtn4.addEventListener("click", () => {
  const numSpan = document.querySelector(".total");
  numSpan.innerText = Number(numSpan.innerText) * 0;
});

total1.innerText = `0`;
