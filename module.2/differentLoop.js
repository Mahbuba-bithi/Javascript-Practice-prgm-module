//for Off , for in

let techStack = ["js", "ts" , "node", "psql"]


//let likhle o kaj korbe...index diye itterate na korte chaile for of loop likhbo 
for(const i of techStack){
    console.log("learning:", i)
}



let obj = {
    name: "Ms Bithi",
    age: 100,
    address: "dhaka",
};


//for in diye object er moddhe jgula segula pacchi 
for(let ele in obj){
    console.log(ele, "->", obj[ele]);

}

//break

let marks = 50;

for(let i = marks; i<=100; i++){
    if(i>60){
        break;
    }

    console.log(i)
}

for(let i = 0; i<15; i++ ){
    if(i%2 !=0){
        continue;
    }
    console.log(i);
}