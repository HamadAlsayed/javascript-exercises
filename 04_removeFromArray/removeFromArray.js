const removeFromArray = function(arr, ...arg) {
    const newArray = [];
    
    arr.forEach((item) => {
        if (!arg.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;