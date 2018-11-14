

function boysort(ary) {
    let sorted = false;
    let head = [];
       
    if(ary.length > 1){
        for(h = 0; h > ary.length; h++) {

        }
        let x = ary.pop();
        let y = ary.pop();
            if(x > y){
                head.push(x);                
            }
            if(x < y){
                head.push(y);
            }
        
                       
            
    }

    
}

console.log('boy sort', boysort(ary));