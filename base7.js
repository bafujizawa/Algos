// Given an integer num, return a string of its base 7 representation

// num = 100
// Output: "202"

// num = -7
// Output: "-10"

const convertToBase7 = function(num) {
    let solution = [];
    let isNegative = false;

    if(num < 0) {
        isNegative = true;
        num *= -1
    }

    while(num > 0) {
        solution.push(num % 7)
        num = Math.floor(num / 7)
    }

    if(solution.length === 0) return "0"

    if(isNegative) {
        return (-solution.reverse().join("")).toString()
    } else {
        return solution.reverse().join("");
    }

};

console.log(convertToBase7(-7));