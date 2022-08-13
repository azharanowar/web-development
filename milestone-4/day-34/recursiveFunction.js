// Sum series by for loop

// function sumSeries( n ) {
//     let sum = 0;
//     for ( i = 1; i <= n; i++ ) {
//         sum += i;
//     }

//     return sum;
// }

// const sum = sumSeries( 5 );
// console.log( sum );





// Sum Sereis by Recursive Function

let sum = 0;
function sumSeries( n ) {
    sum += n;
    if ( n === 1 ) {
        return 1;
    }
    return sumSeries( n - 1 );
}

sumSeries( 5 );
console.log( sum );

