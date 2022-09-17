const studentInfo = {
    name: "Anowar Hosen",
    roll: 181040,
    registration: 1500980692,
    depertment: "Computer"
}


const {name, roll, registration} = studentInfo;
console.log(name);
console.log(roll);
console.log(registration);
// console.log(depertment);     // As we didn't declare depertment with the object as we did with name, roll, and registration. 



// Array destructuring:

const studentsName = ["Anowar", "Arafat", "Shakhawat", "Shorip"];
const [student1, student2, student3] = studentsName;

console.log(student3);