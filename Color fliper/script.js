var green = document.getElementById('Green');
var red = document.getElementById('red');
var blue = document.getElementById('blue');
var random = document.getElementById('random');

function change() {
    document.body.style.backgroundColor = 'green';
}

function cha() {
    document.body.style.backgroundColor = 'red';
}

function chang() {
    document.body.style.backgroundColor = 'blue';
}

function randomf() {
    var redcolor = Math.round(Math.random() * 255);
    var greencolor = Math.round(Math.random() * 255);
    var bluecolor = Math.round(Math.random() * 255);

    var randomcolor = `rgb(${redcolor}, ${greencolor}, ${bluecolor})`;
    document.body.style.backgroundColor = randomcolor;
}

