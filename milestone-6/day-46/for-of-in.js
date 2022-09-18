const studentInfo = {
    name: "Azhar Anowar",
    roll: 181040,
    registration: 1500980692,
    depertment: "Computer",
    Shift: "2nd",
}

// There will be a error because object can't be iterable. That's why we will need for in: 
// for ( item of studentInfo ) {
//     console.log(item);
// }

for ( item in studentInfo ) {
    console.log(item);
}