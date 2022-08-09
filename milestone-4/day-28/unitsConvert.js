// Inches to Feet Converter

function incheToFeet( inche ) {
    const feet = inche / 12;
    return feet;
}

const result1 = incheToFeet( 24 );
const result2 = incheToFeet( 48 );
const result3 = incheToFeet( 16 );
console.log(result1, result2, result3);




// Mile to Kilometer Converter

function mileToKilometer( mile ) {
    const kilometer = mile * 1.609;
    return kilometer;
}

const kiloResult1 = mileToKilometer( 100 );
const kiloResult2 = mileToKilometer( 43 );
const kiloResult3 = mileToKilometer( 50 );
console.log( kiloResult1, kiloResult2, kiloResult3 );