const reverseString = function(inputStr) {
    let reversedStr = "";
    let tempChar;
    for (let i = inputStr.length - 1; i >= 0; i--) {
        tempChar = inputStr[i];
        reversedStr = reversedStr + tempChar;

        // reversedStr = reversedStr + inputStr[i];
    }

    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
