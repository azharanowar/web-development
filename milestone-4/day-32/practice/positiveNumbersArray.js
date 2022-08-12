function positiveNumbersArray( numbers ) {
    let positiveNumbers = [];
    for ( number of numbers ) {
        if ( number >= 0) {
            positiveNumbers.push( number );
        } else {
            return positiveNumbers;
        }
    }
}

const positiveNumbers = positiveNumbersArray( [ 10, 12, 3, 100, 16, 13, 0, 20, -4, 50, 30 ] );
console.log( positiveNumbers );