
//1st condition mile gele e theme jay find ar filter sobgular sathe match korle sob gula ney
   let fruits = ["apple","mang0","lichi","watermelon","hifhihishdk"]

 let customFruits = fruits.find((f) => f.length>5 );

let findFr = fruits.includes("Mango")
//  console.log(findFr);

let  students = [
    {name: "bithi", marks:70 },
     {name: "chaity", marks:85 },
      {name: "fabi", marks:85 },
]

let studentCheck = students.some((s) => s.marks>80)

console.log(studentCheck)



let studentCheck1 = students.every((s) => s.marks>80)

console.log(studentCheck1)


//every() মানে হলো "প্রত্যেকটি"। অ্যারের সবকটি উপাদানকেই দেওয়া শর্ত পূরণ করতে হবে। যদি একটা উপাদানও শর্ত পূরণ না করে, তাহলে এটি false রিটার্ন করবে।

//some() মানে হলো "অন্তত একটি"। অ্যারের মধ্যে থাকা উপাদানগুলোর যেকোনো একটি (কমপক্ষে ১টি) যদি দেওয়া শর্ত পূরণ করে, তবেই এটি true রিটার্ন করবে।