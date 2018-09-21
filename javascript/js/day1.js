let jay = 'Jason';

let name =
    `<ul>
    <li>${ jay}<li>
    </ul>`;

let car = { brand: 'BMW', model: 'X5', engine: { cylinders: 8, liters: 5.6 }, isRegistered: true };

let variable = {
    boo: true,
    num: 3,
    word: 'hey',
    obj: {stuff: 'string', numbers: 3},
    func: console.log('hey')
}

variable.func;

document.getElementById('header').innerHTML = name;