console.log( "Hello World!" );
console.log(document)

let listItems = document.getElementsByTagName('li');

console.log(listItems);

for ( let item of listItems ) {
    console.log( item.innerText );
}