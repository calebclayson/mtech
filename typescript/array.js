var myarr = [];
myarr.forEach(function (item) {
    console.log(item);
});
function logging(item) {
    console.log(item);
}
myarr.forEach(logging);
myarr.forEach(function (item) { return console.log(item); });
myarr.forEach(function (item) { return item + 1; }); //returns the item plus 1
myarr.forEach(function (item) {
    console.log(item);
});
myarr.filter(function (item) { return console.log(item); });
