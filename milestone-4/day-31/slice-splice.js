const numbers = [ 21, 20, 43, 19, 12, 65, 21, 10, 14, 44, 13 ];
console.log( numbers );


// slice()

console.log( numbers.slice( 1, 6 ) );
console.log( numbers );



// splice()

// console.log( numbers.splice( 0, undefined, 30 ) ); // Adding a new elements to 0 number index without removing any olds elements.
console.log( numbers.splice( 1, 3, 500, 600 ) ); // Remove index 1 to 3 elements and add 2 new element from starting of deleted elements.
console.log( numbers );


// Note: 
// slice() return new array with the condition provided but don't change anything in main array. But
// splice() return removed elements from the array and change the main array with the condition provided.

