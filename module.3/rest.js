//function 

function add(...numbers){
   let total = 0;
   for(const num of numbers){
    total += num;

   }
   return total
}

//  console.log(add(1,2,3,4,5,6,100));
  

//object

const obj = {
    age:"tanmoy",
    age: 27,
    address: "dhaka",
    occupation: "developer",

};

//ekta k exclude kore baki gulo ke peye gechi

const {name,...remaining} = obj;
// console.log(remaining)

//array

const arr = [1,2, 100, 200,];

const [, , ...rest] = arr

// console.log(rest)

//funtion e rest operator ke sobsomoy last e rakhte hobe  jodi ek er odhik parameter thake

function something (one, ...remaining){
    console.log(one,remaining);
    
}
console.log(something("first", 1,2,3,4,5,6.7))



// যখন কল করা হয় something("first", 1,2,3,4,5,6.7) — তখন:

// one = "first" (প্রথম আর্গুমেন্ট)
// ...remaining হলো rest parameter, বাকি সব আর্গুমেন্ট একটা array-তে জমা করে → remaining = [1, 2, 3, 4, 5, 6.7]

// তাই ফাংশনের ভিতরের console.log(one, remaining) প্রিন্ট করবে:

// first [ 1, 2, 3, 4, 5, 6.7 ]