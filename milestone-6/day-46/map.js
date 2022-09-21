function doubleItOld(numbers) {
    const newNumbers = [];
    for (const number of numbers) {
        newNumbers.push(number * 2);
    }
    return newNumbers;
}

const numbers = [4, 12, 8, 3, 3, 2, 4, 5, 6];
console.log(doubleItOld(numbers));