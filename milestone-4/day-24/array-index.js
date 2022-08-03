var numbers = [ 10, 20, 30, 50, 100, 200 ];
var studentsName = [ "Azhar", "Anowar", "Arafat", "Ali", "Nihad" ];


// console.log(number);
// console.log(studentsName);


// Find index number from a array elements value
// console.log(studentsName.indexOf("Arafat")); // output: 2


// Push is used to add a new element to an array
// console.log( numbers );
// numbers.push( 500 );
// console.log( numbers );


// Pop is used to remove an elemets from array
// console.log( studentsName );
// studentsName.pop();
// console.log( studentsName );


// Add a new element to an array particular index
console.log(numbers);
numbers.splice(0, 0, 20); // here first arguments is index number, second one is how many elements to remove and third one is value to add.
console.log(numbers);
