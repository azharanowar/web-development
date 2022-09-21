const studentInfo = {
    name: "Azhar Anowar",
    roll: 181040,
    depertment: "Computer",
    123: "digit"
}

console.log(studentInfo.name);  // Dot Notation
console.log(studentInfo['name']);  // Object Notation


// console.log(studentInfo.123);   // Here we can't use dot notation to access 123 attribute.
console.log(studentInfo[123]);   // But we can use object notation here.