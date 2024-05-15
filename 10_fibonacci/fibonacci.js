const fibonacci = function(num) {
    let numA = 0;
    let numB = 1;
    let numC = 0;
    let fibonacci = "";
    
    fibonacci += numB;

    for (i = 1; i < num; i++) {
        numC = numA + numB;
        fibonacci += " " + numC;
        numA = numB;
        numB = numC;
    }

    const array = fibonacci.split(" ");
    const resultInt = array.map((item) => parseInt(item, 10));
    if (num - 1 === -1) {
        return 0;
    } else if (num - 1 < -1) {
        return "OOPS";
    }
    return resultInt[num - 1];   
};

// Do not edit below this line
module.exports = fibonacci;
