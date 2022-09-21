// map, forEach, filter, find, reduce


const numbers = [1, 2, 3, 4, 5, 10];

const total = numbers.reduce((previusValue, currentValue) =>previusValue + currentValue, 0);
console.log(total)