// Find largest number by nested if else with comparing 3 numbers

function findLargestNumber( number1, number2, number3 ) {
    let largestNumber;
    if ( number1 > number2 ) {
        if ( number1 > number3 ) {
            largestNumber = `Largest number is: ${number1}`;
        } else {
            largestNumber = `Largest number is: ${number3}`;
        }
    } else {
        if ( number2 > number3 ) {
            largestNumber = `Largest number is: ${number2}`;
        } else {
            largestNumber = `Largest number is: ${number3}`;
        }
    }

    return largestNumber;
}

const largestNumber = findLargestNumber(200, 50, 555);
console.log( largestNumber );