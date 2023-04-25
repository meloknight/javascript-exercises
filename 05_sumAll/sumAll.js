const sumAll = function(num1, num2) {
    let theSum = 0;

    if (Number.isInteger(num1) === false || Number.isInteger(num2) === false) {
        return "ERROR";
    };

    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }

    if (num1 >= num2) {
        [num1, num2] = [num2, num1];
    }; 

    for (let i = num1; i <= num2; i++) {
        theSum = theSum + i;
    };

    return theSum;

};

// Do not edit below this line
module.exports = sumAll;
