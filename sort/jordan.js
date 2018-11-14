function selectionSort(array) {
    let arr = array;
    let done = false;
    let rtn = [];
    let changed = [];
    let min = 0;
    
    let count = 0;
    while(!done) {
        for(let i in arr) {
            if(arr[i] < arr[min]) {
                let change = true;
                for(let j in changed) {
                    if(changed[j] == i) {
                        change = false;
                        break;
                    }
                }
                if(change) {
                    min = i;
                }
            }
        }
        rtn.push(arr[min]);
        changed.push(min);
        if(rtn.length == arr.length) {
            done = true;
        } else if(count >= 100) {
            done = true;
            console.log('Timed Out');
        }
        count++;
    }
    return rtn;
}

let ary = [1, 10, 3, 17, 5];

console.log("selectionSort: ", selectionSort(ary));