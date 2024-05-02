const removeFromArray = function(array, ...args) {
    const uniqueArr = [];
      
    for (let i = 0; i < array.length; i++) {
        if (uniqueArr.indexOf(array[i]) === -1) {
        uniqueArr.push(array[i]);
        }
    }
                
    for (const value of args) {
        let index = uniqueArr.indexOf(value);
        if (index !== -1){
            uniqueArr.splice(index, 1);
        }         
    }
    return uniqueArr;
}

// Do not edit below this line
module.exports = removeFromArray;
