function added () {
    let cartnum = additem();
    document.getElementById("totalitems").innerHTML = cartnum;
}

let additem = (function () {
    var cartItems = 0;
    return function () {
        return cartItems += 1;
    }
})();

let firstCar = {
    make: 'Nissan',
    model: 'Titan',
    color: 'black',
    year: 2008,
    seats: 6,
    bed: true
}

let gameObject = {
    difficulty: 'easy',
    health: 7,
    weather: 'clear',
    enemy: 'bear',
    type: 'platformer',
    mana: 10,
    abilities: {
        bombs: 10,
        arrows: 4
    },
    equipment: ['bow', 'sword', 'shield', 'lamp'],
    money: 300,
    status: 'poisoned',
    effectiveType: 'fire',
    classes: [
        'mage',
        'wizard',
        'monk',
        'cleric',
        'barbarian',
        'fighter',
        'ranger',
        'warlock',
        'bard',
        'druid'
    ]
}