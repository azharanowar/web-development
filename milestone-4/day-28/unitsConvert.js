// Inches to Feet Converter

function incheToFeet( inche ) {
    const feet = inche / 12;
    return feet;
}

const result1 = incheToFeet( 24 );
const result2 = incheToFeet( 48 );
const result3 = incheToFeet( 16 );
console.log(result1, result2, result3);