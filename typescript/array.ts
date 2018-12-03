let myarr = [];

myarr.forEach(function(item) {
    console.log(item);
});

function logging(item) {
    console.log(item);
}
myarr.forEach(logging);

myarr.forEach(item => console.log(item));

myarr.forEach((item) => item + 1); //returns the item plus 1

myarr.forEach((item) => {
    console.log(item);
});

myarr.filter(item => console.log(item));