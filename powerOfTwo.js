// Given an integer n, return true if it is a power of two. Otherwise, return false
// An integer n is a power of two, if there exists an integer x such that n == 2x

n = 1
// Output: true

n = 16
// Output: true

n = 3
// Output: false

var isPowerOfTwo = function(n) {
    if(n == 1 || n == 0) return true;
    while(n != 1 ) {
        n = n / 2;
        if(n % 2 != 0 && n != 1) {
            return false;
        }
    }
    return true;
};

console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(16));

