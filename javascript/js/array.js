let cars = ['Volvo', 'Benz', 'Ford'];

document.getElementById('volvo').innerText = cars[0];

cars[0] = 'Tesla';

document.getElementById('array').innerText = cars;

document.getElementById('arraylength').innerText = cars.length;

cars[cars.length] = 'Mercedes';

document.getElementById('addedmercedes').innerText = cars;

let c = caleb('funny', 'dumb');

function caleb(featureone, featuretwo) {
    return `Hello Caleb, you are ${featureone} and ${featuretwo}`;
}

let body = document.getElementById('body');

body.addEventListener('onload', console.log(c));

function update() {
    let x = Number(document.getElementById('input1').value);
    let y = Number(document.getElementById('input2').value);
    let result = x + y;
    document.getElementById('addition-result').innerHTML = result;
}

let btn = document.getElementById('calc');

btn.addEventListener("click", update);