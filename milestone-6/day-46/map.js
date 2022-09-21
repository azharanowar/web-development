function doubleNumbers(numbers) {
    const newNumbers = [];
    for (const number of numbers) {
        const doubleNumber = doubleItNew(number);
        newNumbers.push(doubleNumber);
    }
    return newNumbers;
}


function doubleItOld(number) {
    return number * 2;
}


const doubleItNew = number => number * 2;


const numbers = [4, 12, 8, 3, 3, 2, 4, 5, 6];
console.log(doubleNumbers(numbers));