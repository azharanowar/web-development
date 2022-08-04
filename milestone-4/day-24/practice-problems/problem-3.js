// Finding largest number program from three given value;

var numberOne = 183;
var numberTwo = 79;
var numberThree = 145;

if ( numberOne > numberTwo && numberOne > numberThree ) {
    console.log( "Largest number is number one: " + numberOne );
} else if ( numberTwo > numberOne && numberTwo > numberThree ) {
    console.log( "Largest number is number two " + numberTwo );
} else {
    console.log( "Largest number is number three " + numberThree );
}


// Isosceles triangle program with if else
var triengleSideOne = 2;
var triengleSideTwo = 2;
var triengleSideThree = 1;

if ( (triengleSideOne === triengleSideTwo) || (triengleSideOne === triengleSideThree) ) {
    console.log( "The triengle is isosceles, means two sides are equal." );
} else if ( (triengleSideTwo === triengleSideOne) || (triengleSideTwo === triengleSideThree) ) {
    console.log( "The triengle is isosceles, means two sides are equal." );
} else {
    console.log( "The triengle is not isosceles." );
}