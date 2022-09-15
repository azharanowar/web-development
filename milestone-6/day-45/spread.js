// Spread syntax (...) is provide direct value from an iterable/repeatable object (array, string)

// const numbers = [10, 20, 30, 40, 50, 20, 500, 44];
// console.log(numbers);
// console.log(...numbers);  // Spread syntax





// Few usecase of spread syntax:

const maxNumber = Math.max(30, 40, 50, 20, 400, 40, 20, 440, 20, 50);
console.log(maxNumber);     // Expected value is: 440;

const numbers = [30, 40, 50, 20, 400, 40, 20, 440, 20, 50];
console.log(Math.max(numbers));     // Here Math.max() method not able to find max value because numbers is a array but to find max number by Math.max() we have to provide numeric expression not any array.

// Solution:
console.log(Math.max(...numbers));