
let data;
let http = new XMLHttpRequest();

const fetchData = new Promise(
    () => {
        http.open('GET', './data/data.json');
        http.send();
    }
);

http.onreadystatechange = () => {
    if(http.readyState == XMLHttpRequest.DONE) {
        data = JSON.parse(http.response).categories;
    }
}

function displayDataToPage() {
    for(let i = 0; i < data.length; i++) {
        $('.card-container').append(`
        <div class="card">
            <h1 class="title">${capitalizeFirstLetter(data[i].name)}</h1>
            <p class="season">${capitalizeFirstLetter(data[i].season)}</p>
            <div class="description">${capitalizeFirstLetter(data[i].description)}</div>
        </div>
        `)
    }   
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function within1and20 (num) {
    if(num>=1 && num<=20) {
        return true;
    } else {
        return false;
    }
}

function fiveLong (str) {
    if(str.length === 5) {
        return true;
    } else {
        return false;
    }
}

console.log(fiveLong('caleb'));
console.log(fiveLong(false));
console.log(fiveLong('toolong'));

console.log(within1and20(2));
console.log(within1and20('thing'));
console.log(within1and20(50));