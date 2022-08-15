// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5
// Given an integer n, return true if n is an ugly number

// n = 6
// Output: true
// Explanation: 6 = 2 × 3

// n = 1
// Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5

// n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7

var isUgly = function(n) {

    if (n === 0) return false;

    while (n % 5 === 0) {
        n = n / 5;
    }
    while (n % 3 === 0) {
        n = n / 3;
    }
    while (n % 2 === 0) {
        n = n / 2;
    }

    return n === 1;
}

// console.log(isUgly(6))
// console.log(isUgly(1))
// console.log(isUgly(14))
console.log(isUgly(8))
