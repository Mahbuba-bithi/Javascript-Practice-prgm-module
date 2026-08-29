//optional chainning and nullish coalescing (?. ??, safe property access)

let user1 = {
    name: "bithi",
    address: {
        city: "dhaka"
    },

};

let user2 = {
    name: "karim",
    //no addresss
};


//optional chainning ?
console.log(user1.address.city);
console.log(user2?.address?.city);

//nulish collescing// ??

//undefined ba null thakle nullish use korbo nahole error diye dey eita dile code cholbe
console.log(user2?.address?.city ?? "rajshahi")


let user3 = {}; // ba user3 = { address: null }
console.log(user3?.address?.city ?? "rajshahi"); // "rajshahi" ashbe

