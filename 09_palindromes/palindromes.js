const palindromes = function (str) {
    temp = "";
    // Remove spaces from strings
    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 32 && str.charCodeAt(i) <= 47) {
            continue;
        } else {
            temp += str.at(i);
        }
    }
    temp = temp.toLowerCase();

    tempReverse = "";
    for (i = 0; i < temp.length; i++) {
        tempReverse += temp.at(temp.length - 1 - i);
    }

    // if (tempReverse === temp) {
    //     return true;
    // }
    // return false;

    return tempReverse === temp ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
