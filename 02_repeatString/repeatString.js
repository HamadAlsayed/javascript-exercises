const repeatString = function(string, num) {
    let stringHolder = string;
    if (num < 0) {
        return "ERROR";
    } else if (num == 0) {
        return "";
    } else {
        for (let i = 0; i < num - 1; i++) {
            string = string + stringHolder;
        }
    }
    

    return string;
};

// Do not edit below this line
module.exports = repeatString;
