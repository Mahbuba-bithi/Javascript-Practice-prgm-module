// let marks = [55,82,91,45,98,63]


// //dhore newa hoyeche 0 e max
// let max = marks[0];

// for(let i = 0;i<marks.length; i++){
//     if(max< marks[i]){
//         max = marks[i];
//     }
// }

//console.log(max)

// let marks= [55,82,91,45,98,63]

// let min = marks[0];

// for(i = 0; i<marks.length; i++){
//     if (min>marks[i]){
//         min= marks[i];
//     }
// }
// console.log(min)


//let marks = [55,82,91,45,98,63]

// let sum = 0;
// for (let mark of marks){
//     sum += mark
// }

// console.log(sum)
// console.log(sum/marks.length);

let marks = [55,82,91,45,98,63]
let reMarks = [];
for(let i = marks.length -1; i >=0; i--){
   reMarks.push(marks[i]);

}
console.log(reMarks)