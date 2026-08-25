//scope

{
    let age = 21
}

let age; //globally

function sayAge(){ //functional scope
    age = 21;
}

sayAge();

console.log(age);
