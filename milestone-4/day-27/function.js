/*
    function functionName(perameters) {
        function body...
    }

    //Function Calling: 
    functionName(arguments);
*/


// //Function declaration:
// function stratFan() {
//     console.log("Stand Up!");
//     console.log("GO Towards the fan switch");
//     console.log("Press The Fan Switch!");
// }


// //Function calling:
// stratFan();


// sum() function declaration with two perameters:
function sum( firstNumber, secondNumber ) {
    console.log( firstNumber + secondNumber );
}

// sum() function calling multiple times with two arguments:
sum( 100, 100 );
sum( 100, 50 );
sum( 120, 500 );
sum( 50, 50 );
sum( 10, 20 );
sum( 100, 30 );




function sum(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

var result1 = sum( 30, 50 );
var result2 = sum( 10, 10 );

var finalResult = sum( result1, result2 );
console.log(finalResult);
