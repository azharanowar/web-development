// Sum series by for loop

function sumSeries( n ) {
    let sum = 0;
    for ( i = 1; i <= n; i++ ) {
        sum += i;
    }

    return sum;
}

const sum = sumSeries( 5 );
console.log( sum );