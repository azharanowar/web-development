function factorial( number ) {
    let result = 1;
    for ( i = 1; i <= number; i++ ) {
        result *= i;
    }

    return result;
}

// const result1 = factorial( 5 );
const result1 = factorial( 1 );
const result2 = factorial( 5 );
const result3 = factorial( 6 );

console.log( result1, result2, result3 );





// Factorial using while loop

function factorialByWhile( number ) {
    let fact = 1;
    while ( number >= 1 ) {
        fact *= number;
        number--;
    }

    return fact;
}

const res = factorialByWhile( 5 );
console.log( res );