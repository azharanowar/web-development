// Avarage number of an array

function avarageNumber( numbers ) {
    let sum = 0;
    let numbersLength = numbers.length;
    for ( i = 0; i < numbersLength; i++ ) {
        sum += numbers[i];
    }
    const avarage = sum / numbersLength;

    return avarage;
}

const numbers = [ 20, 10, 20, 50, 100 ]
const avarageResult = avarageNumber( numbers );
console.log( avarageResult );