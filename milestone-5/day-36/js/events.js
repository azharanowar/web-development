// JS event calling option 1 (directly work on html attribute) we will not use that:
// <button onclick="document.body.style.backgroundColor = 'yellow'">Make Yellow</button>




// JS event calling option 2 (Call function in html event attributes) we will use this way sometimes:
function makeRed() {
    document.body.style.backgroundColor = 'red';
}




// JS event calling option 3 (selecting element by id and function calling) we will use this way many times and this is a standard way:
const makeBlueBtn = document.getElementById("makeBlue");
makeBlueBtn.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}




// JS event calling option 3 another (selecting element by id and use a anonymous function) we will use this way many times and this is a standard way:
const makeGreenBtn = document.getElementById("makeGreen");
makeGreenBtn.onclick = function() {
    document.body.style.backgroundColor = 'green';
}




// JS event calling option 4 (addEventListener with function calling) we will use this way many times and this is a standard way:
const makePinkBtn = document.getElementById('makePink');
makePinkBtn.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}




// JS event calling option 4 another (addEventListener with a anonymous function) we will use this way many times and this is a standard way:
const makeOrangeBtn = document.getElementById('makeOrange');
makeOrangeBtn.addEventListener('click', makeOrange);

function makeOrange() {
    document.body.style.backgroundColor = 'orange';
}