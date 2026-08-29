//spread operator - three dot

let cart = ["fruits","rice"]

let cart2 = [...cart,"egg"];

// console.log(cart,cart2);

const personalInfo = {
    name: "bithi",
    age:22,
};



const contactInfo = {
    email: "mahbubabithi0@gmail.com",
    phone:"02302839u4",
    zip:"600"

};

const fullProfile = {
    ...personalInfo,
    ...contactInfo
};

console.log(fullProfile)