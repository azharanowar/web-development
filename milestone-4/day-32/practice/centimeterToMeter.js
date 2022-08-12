function centimeterToMeter( centimeter ) {
    const meterResult = centimeter / 100;
    return meterResult;
}

const meterResult = centimeterToMeter( 100 );
console.log( meterResult );