// for (const key in object) {
//     // এখানে কী (key) ব্যবহার করে কাজ করতে হয়
// }


// for (const element of arrayName) {
//     // এখানে element দিয়ে সরাসরি মান নিয়ে কাজ করবেন
// }



let student = {
    name:"bithi",
    id: 102,
    marks: {
        bangla: 75,
        english: 82,
        math:90
    }
};

let totalMarks = 0;
let totalSbjct = 0;

for(const sbjct in student.marks){
     totalMarks += student.marks[sbjct];
     totalSbjct++;

}

//console.log(totalMarks,totalSbjct)


let avg = (totalMarks / totalSbjct).toFixed(2);

//console.log(avg.toFixed(2));

if (avg>=80) {
    console.log("passed with distinction.got", avg,"%")

} else{
    console.log("fail  koreche")
}

//task: koto item kinechen and koto taka bill hiyecge BDT te dekhabe


let cart = [
    { name: "shirt", price: 1200, quantity: 2 },
    { name: "pants", price: 1200, quantity: 1 },
    { name: "socks", price: 1200, quantity: 3 },
];

let totalQuantity = 0;
let totalPrice = 0;

for (const item of cart) {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
}

console.log(`you bought ${totalQuantity} `);
console.log(`payment: ${totalPrice} BDT।`);