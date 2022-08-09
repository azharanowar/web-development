function findOddSum( numbers ) {
    let sum = 0;
    for ( let i = 0; i < numbers.length; i++ ) {
        if ( numbers[i] % 2 != 0 ) {
            sum += numbers[i];
        }
    }

    return sum;
}


let result = findOddSum([12, 20, 21, 23, 1, 20, 25]);
console.log(result);