let factorialResult = 1;

function factorialByRecursive( n ) {
    if ( n < 0 ) {
        factorialResult = "N most be a postive number!";
    } else if ( n === 0 || n === 1 ) {
        factorialResult = 1
    } else {
        factorialResult = factorialResult * n;
        if ( n === 2 ) {
            return 2;
        }
        return factorialByRecursive ( n - 1 );
    }
    
}

factorialByRecursive( 3 );
console.log( factorialResult );