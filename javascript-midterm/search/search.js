function search(nameList, searchTerm) {
    let doesInclude = [];
    for(let i = 0; i < nameList.length; i++) {
        if(nameList[i].toLowerCase().includes(searchTerm.toLowerCase())) {
            doesInclude.push(nameList[i]);
        }
    }
    return doesInclude;
}