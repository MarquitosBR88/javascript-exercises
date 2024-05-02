const reverseString = function(string) {
    const reverseArray = []
    for (i = string.length - 1; i >= 0; i--) {        
        reverseArray.push(string[i])
    }
    let reverseString = reverseArray.join("")
    return reverseString    
};

// Do not edit below this line
module.exports = reverseString;
