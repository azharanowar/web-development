function celsiusToFuhrenheit( celsius ) {
    const fuhrenheit = 9/5 * celsius + 32;

    return fuhrenheit;
}


const fuhrenheit = celsiusToFuhrenheit( 100 );
console.log( fuhrenheit );




function fuhrenheitToCelsius( fuhrenheit ) {
    const celsius = 5 / 9 * ( fuhrenheit - 32 );

    return celsius;
}


const celsius = fuhrenheitToCelsius( 212 );
console.log( celsius );