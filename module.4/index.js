let taskInput = document.getElementById("taskInput")

let addBtn = document.getElementById("addBtn");

let taskList =  document.getElementById("tasklist")

//console.log(taskInput,addBtn,taskInput)
// let addBtn = document.querySelector("button");
// console.log(addBtn)

// addBtn.addEventListener("click",function(){
//     console.log("btn clicked");
// })

//funtion na likhle oo hobe cleaner code...
 addBtn.addEventListener("click",() => {
     console.log(taskInput.value);
  })

//enter press kore korar jonne jeivabe 
taskInput.addEventListener("keydown",(event) =>{
    if (event.key === "Enter"){
        console.log("enter passed",taskInput.value)
    }
})