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

const googleLink = document.getElementById('googleLink');
googleLink.setAttribute('href', 'https://azharanowar.com');


heading.innerHTML = "Hello From JS innerHTML";
googleLink.text = "Hello From JS innerText";


// classList add and remove css class using JS

const headingTwo = document.getElementById('headingTwo');
console.log( headingTwo.classList[0] );
console.log( headingTwo.classList[1] );
console.log( headingTwo.classList[2] );
console.log( headingTwo.classList.add("title-two") );
console.log( headingTwo.classList.add("text-xl") );
console.log( headingTwo.classList.remove("title") );




// NodeList, htmlcollection, parentNode, childNodes, createElement

const sectionOne = document.getElementById('sectionOne');
console.log(sectionOne.childNodes);
console.log(sectionOne.childNodes[1]);
console.log(sectionOne.parentNode);
console.log(sectionOne.childNodes[1].innerHTML);

console.log(sectionOne.childNodes[1].getAttribute('id'));


const oldFriends = document.getElementById('friends');

const newFriend = document.createElement('li');
console.log(newFriend);

newFriend.innerHTML = "Mohammad Ali";
console.log(newFriend);

oldFriends.append(newFriend)


