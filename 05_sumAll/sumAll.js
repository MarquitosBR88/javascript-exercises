const sumAll = function(n1, n2) {
    let sum = 0
    if (typeof n1 && typeof n2 === "number") {
        if (n1 < n2 && n1 >= 0) {
            for (i = n1; i <= n2; i++) {       
                sum = i + sum;
            }
            return sum;
        } else if (n2 < n1 && n2 >= 0) {
            for (i = n2; i <= n1; i++) {
                sum = i + sum;
            }
            return sum;
        } else {
            return "ERROR"
        }
    } else {
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = sumAll;
