const btn = document.querySelector(".btn")
const counter = document.querySelector(".counter")
const addBtn = document.querySelector(".addBtn")
const minBtn = document.querySelector(".minBtn")

let count = 0;




btn.addEventListener("click", ()=>{
    count++;
    counter.textContent = count;
     if(count>0){
    minBtn.disabled = false;
   }
})
 
addBtn.addEventListener("click", ()=> {
   
    count++;
    counter.textContent = count;

    if(count>0){
    minBtn.disabled = false;
   }
})  

minBtn.addEventListener("click", ()=> {
    count--;
    counter.textContent = count;

    if(count<1){
        minBtn.disabled = true;
        console.log("Error")
        return;
      
    }
  
})




/*let i = ""
for (i = 10; i > 5 ; i--){
    console.log(i);
}*/