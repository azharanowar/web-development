function findLeapYears( years ) {
    for ( var year of years ) {
        if ( (year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0) ) {
            console.log( "This is a leap year", year );
        }
    }
}


let years = [2012, 2023,2024,2025,2028,2030];
findLeapYears( years );