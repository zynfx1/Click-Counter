const btn = document.querySelector(".btn")
const counter = document.querySelector(".counter")

let count = 0;

btn.addEventListener("click", ()=>{
    count++;
    counter.textContent = count;
})

