let array = ['r', 'o', 'c', 'k', ' ', 'o', "n", ' ', 'w', 'o', 'r', 'l', 'd', '!', ' ']


function go() {
    setInterval(function () {
        let last = array.pop()
        array.unshift(last)
        // console.log(array.join(''))
    }, 500);
};

go();

function displayCurrentTime() {
    let today = new Date();
    let weekDay;
    let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    weekDay = days[today.getDay()];
    let hours = () => {
        if (today.getHours() > 12) {
            return today.getHours() - 12;
        } else {
            return today.getHours();
        }
    }
    let ampm = () => {
        if (today.getHours() >= 12) {
            return 'PM';
        } else {
            return 'AM';
        }
    }
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    time = `${hours()}:${minutes}:${seconds} ${ampm()}`;
    return `Today is ${weekDay}. Current time is ${time}`;
}

function checkPalindrome() {
    let user = prompt("Enter a string");
    let ary = string.split(" ");
    let ray = ary.join("");

    let palindrome = true;
    let reverse = [];
    for(let i = ray.length - 1; i > 0; i--){
        palindrome.push(ray[i]);
    }
    for(let i = 0; i < ray.length; i++){
        while(palindrome == true){
            if(ray[i] === reverse[i]){
                palindrome = true;
            }
            else{
                palindrome = false;
            }
        }
    }
    if(palindrome == true){
        console.log(user + " is a palindrome");
    }
    else{
        console.log(user + " is not a palindrome");
    }


    
}