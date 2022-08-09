// Fibonacci series JS Program:

function fibonacci( n ) {
    f1 = 0;
    f2 = 1;
    console.log(f1);
    console.log(f2);
    for ( i = 1; i <= n; i++ ) {
        fib = f1 + f2;
        f1 = f2;
        f2 = fib;

        console.log( fib );
    }
}

fibonacci( 10 );