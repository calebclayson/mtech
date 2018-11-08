let pizza = {};

pizza.decorate = function() {
    console.log("dough and tomato sauce");
};

pizza.getDecorator = function(deco) {
    pizza[deco].prototype = this;
    return new pizza[deco];
};

pizza.Mozzarella = function() {
    this.decorate = function() {
        this.Mozzarella.prototype.decorate();
        console.log("Put on Mozzarella");
    };
};

pizza.StuffedCrust = function() {
    this.decorate = function() {
        this.StuffedCrust.prototype.decorate();
        console.log("Put on Stuffed Crust");
    };
};

pizza.Pepperoni = function() {
    this.decorate = function() {
        this.Pepperoni.prototype.decorate();
        console.log("Put on Pepperoni");
    };
};

pizza = pizza.getDecorator('Pepperoni');
pizza = pizza.getDecorator('Mozzarella');

pizza.decorate();