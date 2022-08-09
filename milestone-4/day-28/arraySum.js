function arraySum( numbers ) {
    let sum = 0;
    for ( i = 0; i < numbers.length; i ++ ) {
        sum += numbers[i];
    }

    return sum;
}

let numbers = [ 10, 20, 30, 50, 100 ];
const arraySumResult = arraySum( numbers );
console.log( arraySumResult );