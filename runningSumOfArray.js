// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i])
// Return the running sum of nums

// nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]

// nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

const runningSum = function(nums) {
    let runningNums = []
    for(let i = 0; i < nums.length; i++) {
        let j = i;
        let sum = 0;
        while(j >= 0) {
            sum += nums[j]
            j--
        }
        runningNums.push(sum)
    }
    return runningNums
};

let nums1 = [1,2,3,4]
let nums2 = [1,1,1,1,1]
console.log(runningSum(nums2))