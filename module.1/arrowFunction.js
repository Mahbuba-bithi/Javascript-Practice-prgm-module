
// function total (price, quantity = 12){
//     const grandTotal = price * quantity;
//     return grandTotal;          
// } 

const total = (price, quantity) => {
     const grandTotal = price * quantity;
  return grandTotal;
};
const spend = total(10,12);
const save = 200 - spend;
console.log(spend, save); 


const add = (a,b) =>a+b

const sum = add(5,10)

console.log(sum);
