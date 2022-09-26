// Given an integer x, return true if x is palindrome integer
// An integer is a palindrome when it reads the same backward as forward

// For example, 121 is a palindrome while 123 is not

// x = 121
// Output: true

const isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    let num = x.toString()
    let i = 0;
    let j = num.length - 1
    while(i <= j) {
        if(num[i] !== num[j]) {
            return false
        }
        i++;
        j--
    }
    return true
};

let num1 = 121;
// console.log(num1.toString().length)
console.log(isPalindrome(num1))