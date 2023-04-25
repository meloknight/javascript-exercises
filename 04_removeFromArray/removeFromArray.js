const removeFromArray = function(inputArray, ...itemsToRemove) {

    for (let j = 0; j <= itemsToRemove.length - 1; j++) {
        for (let i = 0; i <= inputArray.length - 1; i++) {
            if (inputArray[i] === itemsToRemove[j]) {
                inputArray.splice(i, 1);
            }
        }
    }
    
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
