// mini project

let students = [
    { id: 101, name: "rahim", age: 20, department: "CSE" },
    { id: 102, name: "kahim", age: 22, department: "EEE" },
];

// ১. স্টুডেন্ট যোগ করার ফাংশন
function addStudent(name, age, dept) {
    // শেষ আইডির সাথে ১ যোগ করা হয়েছে
    let newId = students.length > 0 ? students[students.length - 1].id + 1 : 101;

    let newStudent = {
        id: newId,
        name: name,
        age: age,
        department: dept
    };
    students.push(newStudent);
    console.log("Student added successfully!");
}

// ২. সব স্টুডেন্ট প্রিন্ট করার ফাংশন
function getAll() {
    console.log("--- All Students List ---");
    console.log(students);
}

// ৩. ID দিয়ে স্টুডেন্ট খোজার ফাংশন
function findStudent(id) {
    let foundStudent = null;

    for (let student of students) {
        if (student.id === id) {
            foundStudent = student;
            break; // সঠিক ব্লকের ভেতর ব্রেক বসানো হয়েছে
        }
    }

    return foundStudent ? foundStudent : `Student with ID ${id} not found!`;
}

// ৪. নির্দিষ্ট ID এর স্টুডেন্ট ডিলিট করার ফাংশন
function deleteStudent(id) {
    let index = students.findIndex(student => student.id === id);

    if (index !== -1) {
        students.splice(index, 1);
        console.log(`Student with ID ${id} deleted successfully!`);
    } else {
        console.log(`Student with ID ${id} not found!`);
    }
}

// ৫. সব স্টুডেন্ট একসাথে মুছে ফেলার ফাংশন (Delete All)
function deleteAll() {
    students = [];
    console.log("All students deleted successfully!");
}

// --- আউটপুট টেস্ট ---

// নতুন স্টুডেন্ট যোগ
addStudent("fahim", 25, "AI");

// সব স্টুডেন্ট দেখা
getAll();

// নির্দিষ্ট স্টুডেন্ট খুঁজে বের করা
console.log("Find 102:", findStudent(102));

// নির্দিষ্ট স্টুডেন্ট ডিলিট করা
deleteStudent(101);
getAll();

// সব স্টুডেন্ট একসাথে মুছে ফেলা
deleteAll();
getAll();