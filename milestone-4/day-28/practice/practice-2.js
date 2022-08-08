function findLeapYears( years ) {
    let leapYears = [];
    for ( var year of years ) {
        if ( (year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0) ) {
            leapYears.push(year);
        }
    }

    return leapYears;
}


let years = [2012, 2023,2024,2025,2028,2030];
let leapYears = findLeapYears( years );
console.log(leapYears);