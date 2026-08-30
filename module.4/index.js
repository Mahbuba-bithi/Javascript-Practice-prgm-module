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
    
let li = document.createElement("li");
li.textContent = taskInput.value ;

taskList.appendChild(li);

    
  })

//enter press kore korar jonne jeivabe 
taskInput.addEventListener("keydown",(event) =>{
    if (event.key === "Enter"){
        console.log("enter passed",taskInput.value)
    }
})

//Ccreate element

// let li = document.createElement("li");
// li.textContent = "learn js ";
// console.log(li)
// taskList.appendChild(li);