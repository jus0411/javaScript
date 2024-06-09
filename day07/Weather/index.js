const lat = 37.51;
const lon = 126.72;
const APIkey = "90711f50ee45cb07352eea49e4baf839";


const cities = ["Bypyeong","Fukuoka","Qingdao","Taipei","Sydney"]

const data = [
  { cityname : "Bypyeong", lat:37.51, lon:126.72},
  { cityname : "Fukuoka", lat:33.59, lon:130.4},
  { cityname : "Qingdao", lat:36.06, lon:120.38},
  { cityname : "Taipei", lat:25.03, lon:121.56},
  { cityname : "Sydney", lat:-33.86, lon:151.2},
];

data.forEach(({ cityname,lat,lon})=>{
  const btn = document.querySelector(`.${cityname}`)
  btn.addEventListener('click',()=>{
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;
  const weatherAPI = fetch(URL);
  weatherAPI
  .then((value) => value.json())
  .then((value) => value.weather[0].main)
  .then((value) => {
    const weather = document.querySelector(".weather");
    weather.innerText = `${cityname} 현재 날씨 : ${value}`;
    });
  });
});



 