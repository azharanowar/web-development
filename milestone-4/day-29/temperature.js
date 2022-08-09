function celsiusToFuhrenheit( celsius ) {
    const fuhrenheit = 9/5 * celsius + 32;

    return fuhrenheit;
}


const fuhrenheit = celsiusToFuhrenheit( 100 );
console.log( fuhrenheit );