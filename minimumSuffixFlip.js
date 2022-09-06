// You are given a 0-indexed binary string target of length n
// You have another binary string s of length n that is initially set to all zeros. You want to make s equal to target.

// In one operation, you can pick an index i where 0 <= i < n and flip all bits in the inclusive range [i, n - 1]
// Flip means changing '0' to '1' and '1' to '0'

// Return the minimum number of operations needed to make s equal to target

// target = "10111"
// Output: 3
// Explanation: Initially, s = "00000".
// Choose index i = 2: "00000" -> "00111"
// Choose index i = 0: "00111" -> "11000"
// Choose index i = 1: "11000" -> "10111"
// We need at least 3 flip operations to form target

const minFlips = function(target) {
    target = "0" + target
    let count = 0;
    for(let i=0;i<target.length - 1;i++) {
        if(target[i] !== target[i+1]) {
            count++
        }
    }
    return count;

}

let str1 = "10111"
console.log(minFlips(str1))