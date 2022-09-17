/* 
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.
 */

const maxNumber = (numbersOne, numbersTwo) => {
    const allNumbers = [...numbersOne, ...numbersTwo];
    return Math.max(...allNumbers);
}

const numbersOne = [20, 30, 40, 400, 300, 100, 413, 400, 500];
const numbersTwo = [20, 320, 400, 430, 300, 140, 413, 400, 500];
const result = maxNumber(numbersOne, numbersTwo);
console.log(result);