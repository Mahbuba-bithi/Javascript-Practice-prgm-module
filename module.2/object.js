//object

let user = {
    name: "bithi",
    age: 25,
    address: "dhaka"
};

//console.log(user["name"])

delete user.address
user.address = "rajshahi"
user.address = {
    city: "rajshahi",
    area:"uposhoshor"
}


//object er vitor theke kivabe key value alada kora jay also object theke arry
//console.log(Object.entries(user))
console.log(Object.keys(user))