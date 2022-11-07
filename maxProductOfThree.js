// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// nums = [1,2,3]
// Output: 6

// nums = [1,2,3,4]
// Output: 24

// nums = [-1,-2,-3]
// Output: -6

const maximumProduct = function(nums) {
    nums.sort((a,b) => a -b)
    let firstSolution = nums[0] * nums[1] * nums[nums.length - 1]
    let secondSolution = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]

    return firstSolution > secondSolution? firstSolution : secondSolution
};


let nums1 = [1,2,3,4,5,6]
console.log(maximumProduct(nums1))