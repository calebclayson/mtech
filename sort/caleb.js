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
