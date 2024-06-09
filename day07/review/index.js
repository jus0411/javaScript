import {data} from "./data.js"

const table = document.querySelector(".table");

data.forEach(({id,fullname,jobtitle,race,university})=>{
    table.insertAdjacentHTML(
        "beforeend",
        `
        <div class="table_data">
                <div class="id">${id}</div>
                <div class="fullName">${fullname}</div>
                <div class="jobTable">${jobtitle}</div>
                <div class="race">${race}</div>
                <div class="university">${university}</div>
        </div>
        `
    );
});

const btn = document.querySelector(".btn");

btn.addEventListener('click',()=>{
    const searchInput = document.querySelector(".searchInput");
    const {value} = searchInput;
    table.innerHTML = "";
    data.forEach(({id,fullname,jobtitle,race,university})=>{
        data.filter(({fullname}) => fullname.includes(value))
        table.insertAdjacentHTML(
            "beforeend",
            `
            <div class="table_data">
                    <div class="id">${id}</div>
                    <div class="fullName">${fullname}</div>
                    <div class="jobTable">${jobtitle}</div>
                    <div class="race">${race}</div>
                    <div class="university">${university}</div>
            </div>
            `
        );
    });

    
});
