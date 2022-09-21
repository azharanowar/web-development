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

// If we use for in then it will provide the value of array each element.
const numbers = [20, 30, 40, 10, 30, 50];
for (number of numbers) {
    console.log(number);
}

// If we use for in then it will provide index of array each element.
for (number in numbers) {
    console.log(number);
}


// We can also use forEach like this:
numbers.forEach(number => console.log(number));