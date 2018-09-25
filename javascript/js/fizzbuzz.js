let num = prompt('Enter a number');

if (((num % 5) == 0) && ((num % 3) == 0)) {
    console.log('FizzBuzz');
} else if ((num % 5) == 0) {
    console.log('Buzz');
} else if ((num % 3) == 0) {
    console.log('Fizz');
} else {
    console.log(num + " is not divisible by 3 or 5");
}

console.log(num);