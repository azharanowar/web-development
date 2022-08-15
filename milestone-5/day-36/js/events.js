function makeRed() {
    document.body.style.backgroundColor = 'red';
}


const makeBlueBtn = document.getElementById("makeBlue");
makeBlueBtn.onclick = makeBlue;


function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


const makeGreenBtn = document.getElementById("makeGreen");
makeGreenBtn.onclick = function() {
    document.body.style.backgroundColor = 'green';
}