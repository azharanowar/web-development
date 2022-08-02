// Javascript variable declaration


/*
    Javascript Variable Name 3 Major Rules:
        1. Not allowed to use javascript reserved keywords.
        2. No number at the first of variable name.
        3. Variable names should be (A-Z, a-z, 0-9, _) no other special character allowed.
*/

/*
    Javascript Variable Name 3 Standard Rules:
        1. Variable names should be meaningful.
        2. Variable names should be readable.
        3. Variable names will always be small-letter.
*/

var name = "Azhar";
var age = 22;
var city = "Noakhali";
isRegularStudent = true;

console.log(name);



// Javascript string concatenation: 

var firstName = "Azhar";
var lastName = "Anowar";

fullName = firstName + ' ' + lastName;

console.log(fullName);



// Javascript variable type convertion:

// var price1 = '100';
// var price2 = '50';
// var totalPrice = price1 + price2;
// console.log(totalPrice);

// var price1 = 100;
// var price2 = '50';
// var totalPrice = price1 + price2;
// console.log(totalPrice);

var price1 = '100';
var price2 = '50';
var totalPrice = parseInt(price1) + parseInt(price2);
console.log(totalPrice);

