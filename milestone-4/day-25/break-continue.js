var numbers = [ 10, 30, 53, 82, 40, 130, 30, 120, 40, 70 ];


for ( i = 0; i < numbers.length; i++) {
    if ( numbers[i] > 100 ) {
        break; // break is used to stop loops instantly.
    }
    console.log( numbers[i] );
}

for ( i = 0; i < numbers.length; i++) {
    if ( numbers[i] > 100 ) {
        continue; // continue is used to skip current loop condition(break one iteration) and continue for next consitions.
    }
    console.log( numbers[i] );
}

