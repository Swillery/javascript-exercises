const fibonacci = function(num) {
    num = Number(num);
    if (num < 0 || isNaN(num)) {return "OOPS"
    };
    let first = 0;
    let second = 1;
    if (num === 0) {return first
    };
        for (let i = 2; i <= num; i++) {
            let sum = first + second;
            first = second;
            second = sum;
        }
        return second;
};

// Do not edit below this line
module.exports = fibonacci;
