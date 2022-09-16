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



/* 
const numbers1 = [30, 20, 40, 45, 66];
const numbers2 = numbers1;

console.log(numbers1, numbers2);

numbers1.push(100);
console.log(numbers1, numbers2);    // Here is a problem, when we are trying to push/add new element to our first array our second array also updating. The reason behind that is, when we store a variable value from another variable javascript just make a connection with both of them.

numbers2.push(200);
console.log(numbers1, numbers2);    // Here we added a new element to our second array not first array still both are having same value. It's happening for storing reference variable.
 */



// Well we will solve this issue by this: 

/* const numbers1 = [30, 20, 40, 45, 66];
const numbers2 = [...numbers1];

console.log(numbers1, numbers2);

numbers1.push(100);
console.log(numbers1, numbers2);

numbers2.push(200);
console.log(numbers1, numbers2);
 */



// Another usecase of spread syntax:

const sum = (numberOne, numberTwo, numberThree, numberFour, numberFive) => numberOne + numberTwo + numberThree + numberFour + numberFive;

// console.log(sum(10, 20, 30, 40, 50));    // Here with 5 parameters of a arrow function everything working fine. But what if you have a array with your all parameters value?

const paraNumbers = [10, 20, 30, 40, 50];

// console.log(sum(paraNumbers));      // It's not working this way, so let's use spread syntax and see is that work or not.
console.log(sum(...paraNumbers));      // Yeah, Now it's working absolutely fine.



