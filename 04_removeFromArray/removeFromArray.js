const removeFromArray = function(arr, ...arg) {

    for (let i = 0; i < arr.length - 1; i++) { 
        
        if (arr[i] === arg[0]) {
            arr.splice(i, 1);
        }

    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;