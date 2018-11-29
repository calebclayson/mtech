function firstDuplicate(array) {
  let duplicateIndexes = [];
  for(let i = 0; i < array.length; i++) {
    let temp = array[i];
    for(let b = i + 1; b < array.length; b++) {
        if(array[b] == temp) {
            duplicateIndexes.push(b);
        }
    }
  }
  let smallestIndex = (duplicateIndexes) => {
    let smallest = duplicateIndexes[0];
    for(let i = 0; i < duplicateIndexes.length; i++) {
        if(smallest > duplicateIndexes[i]) {
            smallest = duplicateIndexes[i];
        }
    }
    return smallest;
  };
  if(duplicateIndexes.length > 0) {
    return array[smallestIndex(duplicateIndexes)];
  } else {
      return -1;
  }
}
