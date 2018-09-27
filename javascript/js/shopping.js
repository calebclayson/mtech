function added () {
    let cartnum = additem();
    document.getElementById("totalitems").innerHTML = cartnum;
}

let additem = (function () {
    var cartItems = 0;
    return function () {
        return cartItems += 1;
    }
})();