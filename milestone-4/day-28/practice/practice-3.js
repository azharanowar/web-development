function findOddSum( numbers ) {
    let sum = 0;
    for ( let i = 0; i < numbers.length; i++ ) {
        if ( numbers[i] % 2 != 0 ) {
            sum += numbers[i];
        }
    }

    return sum;
}


let result = findOddSum([1, 5, 8, 3, 15, 10, 22]);
console.log(result);