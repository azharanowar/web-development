function findSmallestNumber( numbers ) {
    let smallestNumber = numbers[0];
    for ( i = 0; i < numbers.length; i++ ) {
        if ( numbers[i] < smallestNumber ) {
            smallestNumber = numbers[i];
        }
    }

    return smallestNumber;
}


const numbers = [ 12, 50, 100, 200, 500, 5, 10 ]
const smallestNumber = findSmallestNumber( numbers );
console.log( smallestNumber );