// let jay = 'Jason';

// let name =
//     `<ul>
//     <li>${ jay}<li>
//     </ul>`;

// let car = { brand: 'BMW', model: 'X5', engine: { cylinders: 8, liters: 5.6 }, isRegistered: true };

// let variable = {
//     boo: true,
//     num: 3,
//     word: 'hey',
//     obj: {stuff: 'string', numbers: 3},
//     func: console.log('hey')
// }

// variable.func;

// document.getElementById('header').innerHTML = name;

// var firstname = "Joel";
// var lastname = "Frasier";
// // debugger;
// function combinename(fname, lname){
	
// 	fname += " John";
// 	return fname + " " + lname;
// }

// alert(combinename(firstname, lastname));

var firstname = "Joel";
var lastname = "Frasier";
var middlename = "Darryl";
var nametitle = 'Sir';

function combinename(fname, lname, middlename, nametitle){
	
	fname += " John";
	return nametitle + " " + fname + " " + middlename + " " + lname;
}

// alert(combinename(firstname, lastname, middlename, nametitle));

var string = 'hey';
var num = 6;
var array = ['one', 'two', 'three'];
var obj = {
	one: string,
	two: num,
	three: array
}

let ary = ['a', 'c', 'd', 'hj', 'tyn', 't'];

for (let index = ary.length -1; index > -1; index--) {
	// console.log(ary[index]);
}

// ary.forEach(value => console.log(value));

let myArray = ['a', 'ab', 'gt', 'jkm', 'lol'];

function filterArray (array, fn) {
	let newArray = [];
	for(let i = 0; i < array.length; i++) {
		if(fn(array[i])) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}

let myFilteredArray = filterArray(myArray, element => {
	return element.length > 2;
})

function purchase(myprice) {
	var price = myprice;

	if(price.discount === true) {
		let discount = price.amount -1;
	}
}

class formatDate extends Date {
	constructor(datestr) {
		super(datestr);
	}

	getFormattedDate () {
		let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

		let theDay = this.getDate();
		let theMonth = months[this.getMonth()];
		let theYear = this.getFullYear();

		return `${theDay} ${theMonth} ${theYear}`;
	}
}

console.log(new formatDate('August 19, 1975').getFormattedDate());