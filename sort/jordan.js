// function selectionSort(array) {
//     let arr = array;
//     let done = false;
//     let rtn = [];
//     let changed = [];
//     let min = 0;
    
//     let count = 0;
//     while(!done) {
//         for(let i in arr) {
//             if(arr[i] < arr[min]) {
//                 let change = true;
//                 for(let j in changed) {
//                     if(changed[j] == i) {
//                         change = false;
//                         break;
//                     }
//                 }
//                 if(change) {
//                     min = i;
//                 }
//             }
//         }
//         rtn.push(arr[min]);
//         changed.push(min);
//         if(rtn.length == arr.length) {
//             done = true;
//         } else if(count >= 100) {
//             done = true;
//             console.log('Timed Out');
//         }
//         count++;
//     }
//     return rtn;
// }

let ary = [];
for(let i = 0; i < 10000; i++){
    ary.push(Math.floor(Math.random()*100));
}

// // console.log("selectionSort: ", selectionSort(ary));