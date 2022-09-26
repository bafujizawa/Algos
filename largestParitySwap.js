// You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits)
// Return the largest possible value of num after any number of swaps

// num = 1234
// Output: 3412
// Explanation: Swap the digit 3 with the digit 1, this results in the number 3214
// Swap the digit 2 with the digit 4, this results in the number 3412
// Note that there may be other sequences of swaps but it can be shown that 3412 is the largest possible number
// Also note that we may not swap the digit 4 with the digit 1 since they are of different parities

const largestInteger = function(num) {
    const odds = [];
    const evens = [];
    const nums = num.toString().split("");

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) {
            evens.push(nums[i])
        } else {
            odds.push(nums[i])
        }
    }
    odds.sort( (a, b) => a - b)
    evens.sort((a, b) => a - b)

    let highestNum = "";

    for(let j = 0; j< nums.length; j++) {
        if(nums[j] % 2 === 0) {
            highestNum += evens.pop();
        } else {
            highestNum += odds.pop()
        }
    }

    return parseInt(highestNum)
}

let num1 = 1234
console.log(largestInteger(num1))

