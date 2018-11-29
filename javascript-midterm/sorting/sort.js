function sort(list) {
    let sort = true;
    let changeIndexArray = [];
    while(sort) {
        sort = false;
        for(let i = list.length - 2; i >= 0; i--) {
            let tmp = list[i + 1];
            if(list[i] > tmp) {
                changeIndexArray.push(i);
                sort = true;
            }
        } 
        if(sort) {
            for(let i = 0; i < changeIndexArray.length; i++) {
                let tmp = list[changeIndexArray[i]];
                list[changeIndexArray[i]] = list[changeIndexArray[i]+1];
                list[changeIndexArray[i]+1] = tmp;
                changeIndexArray = [];
            }
            // sort = false;
        }
    }
    
    return list;
}
