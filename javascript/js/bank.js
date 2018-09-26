let total = 123.56;
let mystring = String(total);

document.getElementById("acctnum").innerHTML = mystring;

function takemoney() {
    let wamount = document.getElementById('amountbox').value;
    let newval = total - wamount;
    total = newval;
    document.getElementById('acctnum').innerHTML = total;
}