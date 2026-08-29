//reduce, sort, chainning

let products = [
    {title:"mouse", price:500, inStock:true},
    {title:"keyboard", price:600, inStock:false},
    {title:"monitor", price:800, inStock:true},
    {title:"headphone", price:300, inStock:true},
];

let totalPrice = products.reduce((acc,current) =>{
    return (acc += current.price );

},300);

//console.log(totalPrice)

// let sorted = [,20,10,30,40,50].sort()  //eikahen number eivabe sajiye fela jacche kintu jokhon upre je object onekgula dewa oivabe possible na oitar jonne another way

// let sorted = [,20,10,30,40,50].sort((a,b)=>a-b); asc
// let sorted = [,20,10,30,40,50].sort((a,b)=>b-a); dsc



let sorted =  products.sort((a,b) =>a.price-b.price);
// console.log(sorted)


let estPrice = products.filter((p) =>p.inStock==true)
.reduce((acc,current) =>{
    return (acc += current.price);
},0);

console.log(estPrice)