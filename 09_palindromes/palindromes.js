const palindromes = function (string) {
    let str = string.toLowerCase().replace(/\W/g, '');
    const array = str.split("");
    array.reverse();
    let newString = array.join("");
    if (newString === str) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
