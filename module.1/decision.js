//if else, switch case, ternary

// let age = 15;

// if (age >= 18)  {
//     console.log("voter")
// }else {
//     console.log("not a voter")  
// } 

 let marks = 80;

// if(marks>=80 || marks >= 90){
//   console.log("A+")
// } else if (marks>=70){
//    console.log("A")
// } else if (marks>=60){
//     console.log("A-")

// } else {
//     console.log("need improvement");
// } 



switch (marks) {
    case marks >= 80:
        console.log("A+") 
        break;
        case marks >= 70:
         console.log("A")
             break;
    default:
         console.log("need improvement");
        break; 
} 

//ternary condition ? true : false;

let age = 18
 
age>=18 ? console.log("voter") : console.log("not a voter");   

