// Find second largest number from an array

function secondLargestNumber ( numbers ) {
    let largestNumber = numbers[0];
    let secondLargestNumber = numbers[0];

    for ( i = 0; i < numbers.length; i++ ) {
        if ( numbers[i] > largestNumber ) {
            largestNumber = numbers[i];
        } else if( numbers[i] > secondLargestNumber && secondLargestNumber != largestNumber ) {
            secondLargestNumber = numbers[i];
        }
    }
    
    
    return [ largestNumber, secondLargestNumber ];
}

const numbers = [ 10, 30, 150, 60, 10, 100, 95, 20, 90];
const largestNumber = secondLargestNumber( numbers );
const mostLargestNumber = largestNumber[0];
const secondMostLargestNumber = largestNumber[1];

console.log("Most largest number is: ", mostLargestNumber);
console.log("Second most largest number is: ", secondMostLargestNumber);