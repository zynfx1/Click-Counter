const btn = document.querySelector(".btn")
const counter = document.querySelector(".counter")
const addBtn = document.querySelector(".addBtn")
const minBtn = document.querySelector(".minBtn")

let count = 0;




btn.addEventListener("click", ()=>{
    count++;
    counter.textContent = count;
})

addBtn.addEventListener("click", ()=> {
    count++;
    counter.textContent = count;
})

minBtn.addEventListener("click", ()=> {
    count--;
    counter.textContent = count;

    if(count<0){
        minBtn.disabled = true;
        counter.textContent = 0;
        console.log("Error")
      
    }
    else
    {

       
    }
})
