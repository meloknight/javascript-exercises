const repeatString = function(repStr, numOfTimesRepeated) {
    let outputStr;
    if (numOfTimesRepeated < 0) {
        outputStr = "ERROR" 
    } else {
        outputStr = "";
        for (let i = 0; i < numOfTimesRepeated; i++) {
            outputStr = outputStr + repStr;
        } 
    }

    return outputStr;
};

// Do not edit below this line
module.exports = repeatString;
