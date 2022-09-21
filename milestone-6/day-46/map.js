const doubleIt = number => number * 2;

function getDouble(numbers) {
    const newNumbers = [];
    for (const number of numbers) {
        const doubleNumber = doubleIt(number);
        newNumbers.push(doubleNumber);
    }
    return newNumbers;
}


const numbers = [4, 12, 8, 3, 3, 2, 4, 5, 6];


console.log(getDouble(numbers));

console.log(numbers.map(doubleIt));
console.log(numbers.map(double => double * 2));


console.log([4, 12, 8, 3, 3, 2, 4, 5, 6].map(number => number * 2))