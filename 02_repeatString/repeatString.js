

const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    } else {
        const word = [];
        for (i = 1; i <= num; i++) {
            word.push(string);
        }
        let stringRepeated = word.join("")
        return stringRepeated       
    }
};


// Do not edit below this line
module.exports = repeatString;
