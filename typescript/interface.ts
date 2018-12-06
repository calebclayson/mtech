interface Animal {
    walk: (distance: number) => void;
    hair?: string;
}

interface Cat extends Animal {
    species: string;
    favoriteToy: string;
    numberOfStripes?: number;
}

interface Dog extends Animal {
    species: string;
    favoriteToy: string;
}

class MyCat implements Cat {
    walk: (x) => {
        
    }
    hair: 'brown';
    species: "african gold cat";
    favoriteToy: 'yarn';
}

class MyDog implements Dog {
    walk: (x) => {

    };
    hair: string;
    species: string;
    favoriteToy: string;
    constructor(h, s, t) {
        this.hair = h;
        this.species = s;
        this.favoriteToy = t;
    }
}

let robtheDog = new MyDog('black', 'lab', 'ball');