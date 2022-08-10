/*
    1. Print numbers from 1-50
    2. If the number is divided by 3 then print "foo" instead of the number.
    3. If the number is divided by 5 then print "bar" instead of the number.
    4. If the number is divided by 3 and 5 then print "foobar" instead of the number.
*/

for ( i = 1; i <= 50; i++ ) {
    if ( (i % 3 === 0) && (i % 5 === 0) ) {
        console.log( "foobar" );
    } else if ( i % 3 === 0 ) {
        console.log( "foo" );
    } else if ( i % 5 === 0 ) {
        console.log( "bar" );
    } else {
        console.log( i );
    }
}