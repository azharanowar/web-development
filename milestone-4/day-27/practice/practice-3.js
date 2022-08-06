function makeAvarage( numbers ) {
    sum = 0;
    for ( i = 0; i < numbers.length; i++ ) {
        sum += numbers[i];
    }
    return sum;
}

var numbers = [ 20, 30, 50, 10, 30 ];
var result = makeAvarage( numbers );
console.log( "The numbers array summation is: ", result );