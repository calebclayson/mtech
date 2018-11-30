class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

let myString: string = "";
myString = "some string";

enum Category { Biography, Poetry, Fiction };

class Book {
    title: string;
    category: Category;
}

let harryPotter = new Book();
harryPotter.title = "Harry Potter";
harryPotter.category = Category.Fiction;

let markTwain = new Book();
markTwain.title = "Mark Twain";
markTwain.category = Category.Biography;

let books = [harryPotter, markTwain];

function getBiographyBooks() {
    books.filter((book) => book.category == Category.Biography);
}

console.log(greeter.greet());
console.log(Category[harryPotter.category]);