// const student = {
//     name: "Rahim",
//     age: 20,
//     address: "Dhaka"
// }

//old
// const oldName = student.name

//new
// const {age,name,address} = student

// console.log(name);


// const student1= {
//     name1: "stdntName",
//     age: 20,
//     address: {
//         city: "dhaka",
//         zip: 1212,

//     },
// };

// const {stdntName,address:{city,zip}} = student1;

// console.log(stdntName,city)


const array = ["red","green", "black"];

//const [first,second, third] = array;
const [,, third] = array;

// console.log(third)



const student1= {
    name: "bithi",
    age: 20,
    address: {
        city: "dhaka",
        zip: 1212,

    },
    hobbies: ["gardening","painting"],
};

const {name,address:{city}, hobbies:[firstHobby]} = student1;

console.log(firstHobby);