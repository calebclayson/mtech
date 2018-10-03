const caleb = {
    name: 'Caleb Clayson',
    phone: '(444)444-4444',
    email: 'clayson.caleb@gmail.com',
    occupation: 'MTECH Student'
}

document.getElementById('name').innerText = caleb.name;
document.getElementById('occupation').innerText = caleb.occupation;
document.getElementById('email').innerText = caleb.email;
document.getElementById('phone').innerText = caleb.phone;

function Phantom(myx, myy, myname) {
    this.x = myx;
    this.y = myy;
    this.gravity = 5.2;
    this.name = myname;

    this.fly = function() {
        this.y -= 50;
    }

    this.eat = function(food) {
        console.log(`${this.name} ate ${food}`);
    }
}

let Reflector = function(obj) {
    this.getProperties = function() {
        let properties = [];
        for(let prop in obj) {
            if(typeof obj[prop] != "function") {
                properties.push(prop);
            }
        }
        return properties;
    };
    this.getMethods = function() {
        let methods = [];
        for (let method in obj) {
            if(typeof obj[method] == "function") {
                methods.push(method);
            }
        }
        return methods;
    }
};

let myphantom = new Phantom();
let mirror = new Reflector(myphantom);
let myprops = mirror.getProperties();
let mymethods = mirror.getMethods();
console.log(myprops);
console.log(mymethods);

function Engine(engine, make, model) {
    this.engine = engine;
    this.make = make;
    this.model = model;
}

let char = {
    name: 'caleb',
    class: 'brawler',
    health: 80,
    modifier: 'strength',

    eatfood: function(food) {
        console.log(`${this.name} ate ${food}`);
    },
    attack: function(enemy) {
        console.log(`${this.name} attacked ${enemy}`);
    },
    greet: function(saying) {
        console.log(saying);
    },
    takeDamage: function(amount) {
        this.health -= amount;
    }
}