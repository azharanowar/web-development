// Reverse String Program:

function reverseString( text ) {
    reverseText = '';
    for ( i = text.length - 1; i >= 0; i-- ) {
        reverseText += text[i];
    }
    
    return reverseText;
}


const text = "Hello World";
const reverseStringResult = reverseString( text );

console.log( reverseStringResult );