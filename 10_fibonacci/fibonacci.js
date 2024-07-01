const fibonacci = function (n) {
    let m;
    let fn1 = 0,
        fn2 = 1,
        nextFib;

    if (typeof n === "string") {
        m = parseInt(n);
    } else {
        m = n;
    }

    if (m < 0) {
        return "OOPS";
    }

    if (m == 1) {
        return m;
    }

    for (i = 1; i < m; i++) {
        nextFib = fn1 + fn2;
        fn1 = fn2;
        fn2 = nextFib;
    }

    return nextFib;
};

// Do not edit below this line
module.exports = fibonacci;
