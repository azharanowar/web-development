function evenOddChecker( number ) {
    if ( number % 2 == 0 ) {
        console.log(number, "is a even number.");
    } else {
        console.log(number, "is a odd number");
    }
}

evenOddChecker(5);
evenOddChecker(12);
evenOddChecker(16);
evenOddChecker(21);
evenOddChecker(111);



function evenOddNumberChecker( number ) {
    var result;
    if ( number % 2 == 0 ) {
        result = number + " is a even number";
    } else {
        result = number + " is a odd number";
    }
    return result;
}

var result = evenOddNumberChecker(20);
console.log(result);