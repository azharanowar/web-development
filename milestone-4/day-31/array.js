let name = "Azhar Anowar";
const age = 20;
const students = {
    name: "Mohammad Ali",
    age: 21,
    roll: 169721
}

function sum( sum1, sum2 ) {
    const result =  sum1 + sum2;
    return result;
}

sum();


const rolls = [ 169756, 169775, 181040 ];



console.log( typeof name );
console.log( typeof age );
console.log( typeof students );
console.log( typeof sum );
console.log( typeof rolls ); // To check is that array or not typeof is not works. It say array as a object.

console.log( Array.isArray( students ) );
console.log( Array.isArray( sum ) );
console.log( Array.isArray( rolls ) )


const moreRolls = [ 169711, 169721, 169722, 169728, 169748 ];

const allRolls = moreRolls.concat(rolls);
console.log( allRolls );
