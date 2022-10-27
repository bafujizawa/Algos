// You have a bomb to defuse, and your time is running out!
// Your informer will provide you with a circular array code of length of n and a key k.

// To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

// If k > 0, replace the ith number with the sum of the next k numbers.
// If k < 0, replace the ith number with the sum of the previous k numbers.
// If k == 0, replace the ith number with 0.
// As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

// Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

// code = [5,7,1,4], k = 3
// Output: [12,10,16,13]
// Explanation: Each number is replaced by the sum of the next 3 numbers
// The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around

const decrypt = function(code, k) {
    let isNegative = false;

    let decrypted = new Array(code.length).fill(0);

    if(k < 0) {
        k = -k
        isNegative = true;
        code = code.reverse()
    }

    if(k !== 0) {
        for(let i = 0; i < code.length; i++) {
            let count = 0;
            let j = i + 1;
            while(count < k) {
                if(j === code.length) {
                    j = 0;
                }
                decrypted[i] += code[j]
                count++
                j++
            }
        }
    }

    if(isNegative) {
        decrypted = decrypted.reverse()
    }

    return decrypted;
};

function add(accumulator, a) {
    return accumulator + a
}

let code1 = [5,7,1,4]
let code2 = [2,4,9,3]

console.log(decrypt(code2, -2))
// console.log(code1.reverse())


