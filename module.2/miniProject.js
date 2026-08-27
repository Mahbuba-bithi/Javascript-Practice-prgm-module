// mini project

let students = [
    {id: 101, name:"rahim", age:20, department:"CSE"},
    {id: 102, name:"kahim", age:22, department:"EEE"},
];

function addStudent(name,age,dept){
   let newId = students.length>0? students[students.length - 1].id :101;

    let newStudent = {
        id: newId,
        name: name,
        age: age,
        department: dept
    };
   students.push(newStudent)
   console.log("student added successfully")
}

addStudent("fahim",25,"ai")
console.log(students)