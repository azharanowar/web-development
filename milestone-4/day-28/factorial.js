function factorial( number ) {
    let result = 1;
    for ( i = 1; number >= i; i++ ) {
        result *= i;
    }

    return result;
}

// const result1 = factorial( 5 );
const result1 = factorial( 1 );
const result2 = factorial( 5 );
const result3 = factorial( 6 );

console.log( result1, result2, result3 );