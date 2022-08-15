// JS event calling option 1:
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// JS event calling option 2:
const makeBlueBtn = document.getElementById("makeBlue");
makeBlueBtn.onclick = makeBlue;


function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// JS event calling option 3:
const makeGreenBtn = document.getElementById("makeGreen");
makeGreenBtn.onclick = function() {
    document.body.style.backgroundColor = 'green';
}