const numbers = [10, 30, 20, 13, 32, 40, 7, 30, 12, 22, 32, 4, 0, 13, 47];

const greatherNumbers = numbers.filter(number => number > 20);
console.log(greatherNumbers);


const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers)