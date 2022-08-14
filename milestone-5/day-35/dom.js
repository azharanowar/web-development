// console.log( "Hello World!" );
// console.log(document)

let listItems = document.getElementsByTagName('li');

// console.log(listItems);

for ( let item of listItems ) {
    // console.log( item.innerText );
}


const headings = document.getElementsByTagName('h1')[0].innerText = "Hello From JavaScript!";
// console.log(document.getElementsByTagName('h1')[0]);

const unorderedLists = document.getElementsByClassName('unordered-list');
// console.log(unorderedLists);


const friends = document.getElementById("friends");
// console.log(friends);

const unorderedList = document.querySelector('.unordered-list');
// console.log(unorderedList);

const unorderedListsQuerySelector = document.querySelectorAll('.unordered-list');
console.log(unorderedListsQuerySelector[1]);



// getAttribute, setAttribute, innerText, innerHTML

const heading = document.getElementById('heading');
console.log(heading.getAttribute('title'));
