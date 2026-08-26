
let user = {
    name: "bithi",
    age: 25,
    address:  {
    city: "rajshahi",
    area:"uposhoshor",
    zipcode: 600
},
};  
  
// console.log(user["address"]["zipcode"])
// console.log(user["address"].zipcode)
// console.log(user.address.zipcode)


// let entry = Object.entries(user);
// console.log(entry[0][1])

let students = [
    {
        name:"fahim",
        id:101,

    },
    {
        name:"fahim",
        id:102,

    },
    {
        name: "sahim",
        id: 103,
        address:{
            area: "badda",
            thana: "vatara",
            lane: "embasi lane",
            option: ["dhaka","daca cake"] ,
        },
    },
];




students[2].address.option[1] = "premium"
//[], ba , diye o kora jay
console.log(students[2].address.option[1])
