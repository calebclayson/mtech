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