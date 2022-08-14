console.log( "Hello World!" );
console.log(document)

let listItems = document.getElementsByTagName('li');

// console.log(listItems);

for ( let item of listItems ) {
    // console.log( item.innerText );
}


const headings = document.getElementsByTagName('h1')[0].innerText = "Hello From JavaScript!";
console.log(document.getElementsByTagName('h1')[0]);

const unorderedLists = document.getElementsByClassName('unordered-list');
console.log(unorderedLists);


const friends = document.getElementById("friends");
console.log(friends);