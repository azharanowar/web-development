// Spread syntax (...) is provide direct value from an iterable/repeatable object (array, string)

// const numbers = [10, 20, 30, 40, 50, 20, 500, 44];
// console.log(numbers);
// console.log(...numbers);  // Spread syntax





// Few usecase of spread syntax:

/* const maxNumber = Math.max(30, 40, 50, 20, 400, 40, 20, 440, 20, 50);
console.log(maxNumber);     // Expected value is: 440;

const numbers = [30, 40, 50, 20, 400, 40, 20, 440, 20, 50];
console.log(Math.max(numbers));     // Here Math.max() method not able to find max value because numbers is a array but to find max number by Math.max() we have to provide numeric expression not any array.

// Solution:
console.log(Math.max(...numbers)); */




const numbers1 = [30, 20, 40, 45, 66];

const numbers2 = numbers1;

console.log(numbers1, numbers2);

numbers1.push(100);
console.log(numbers1, numbers2);    // Here is a problem, when we are trying to push/add new element to our first array our second array also updating. The reason behind that is, when we store a variable value from another variable javascript just make a connection with both of them.

numbers2.push(200);
console.log(numbers1, numbers2);    // Here we added a new element to our second array not first array still both are having same value. It's happening for storing reference variable.
