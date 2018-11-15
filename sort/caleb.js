function bubbleSort(arr) {
    let sort = true;
    let rtn = arr;
    let changeIndexArr = [];
    while(sort) {
        sort = false;
        for(let i = rtn.length - 2; i >= 0; i--) {
            let tmp = rtn[i + 1];
            if(tmp < rtn[i]) {
                sort = true;
                changeIndexArr.push(i);
            }
        }
        if(sort) {
            for(let i = changeIndexArr.length - 1; i >= 0; i--) {
                let tmp = rtn[changeIndexArr[i]];
                rtn[changeIndexArr[i]] = rtn[changeIndexArr[i] + 1];
                rtn[changeIndexArr[i] + 1] = tmp;
                changeIndexArr.pop();
            }
        }
    }
    return rtn;
}

console.log('bubbleSort: ', bubbleSort(ary));

let newSortedAry = bubbleSort(ary);

function search(arr, num) {
    let done = false;
    let min = 0;
    let max = arr.length - 1;
    let mid = Math.round((arr.length-1)/2);

    while(!done) {
        if(arr[mid] == num) {
            done = true;
            console.log('array is '+num+" at index of "+mid);
            return true;
        } else if(arr[mid] > num) {
            max = mid;
            mid = Math.round(((min + max)/2));
        } else if(arr[mid] < num) {
            min = mid;
            mid = Math.round((min + max)/2);
        } else {
            console.log('not in array');
            done = true;
            return false;
        }
    }
}

search(newSortedAry, 3);