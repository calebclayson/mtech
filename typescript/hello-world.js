var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var myString = "";
myString = "some string";
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
})(Category || (Category = {}));
;
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
var harryPotter = new Book();
harryPotter.title = "Harry Potter";
harryPotter.category = Category.Fiction;
var markTwain = new Book();
markTwain.title = "Mark Twain";
markTwain.category = Category.Biography;
var books = [harryPotter, markTwain];
function getBiographyBooks() {
    books.filter(function (book) { return book.category == Category.Biography; });
}
console.log(greeter.greet());
console.log(Category[harryPotter.category]);
