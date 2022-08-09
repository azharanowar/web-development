// Swapping Technique - 1

let a = 10;
let b = 20;
console.log ( a, b );

let temp = a;
a = b;
b = temp;
console.log( a, b );



// Swapping Technique - 2

let x = 50; 
let y = 100;
console.log( x, y );

[ x, y ] = [ y, x ];
console.log( x, y );



// Swapping Technique - 3

let i = 40;
let j = 60;
console.log( i, j );

i = i + j;
j = i - j;
i = i - j;
console.log( i, j );

