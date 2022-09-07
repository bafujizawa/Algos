// Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums

// nums = [11,7,2,15]
// Output: 2
// Explanation: The element 7 has the element 2 strictly smaller than it and the element 11 strictly greater than it
// Element 11 has element 7 strictly smaller than it and element 15 strictly greater than it
// In total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums

const countElements = function(nums) {
    let sortedArray = nums.sort(function(a, b) {return a - b})
    let min = sortedArray[0]
    let max = sortedArray[sortedArray.length - 1]
    for(let i=sortedArray.length;i>=0;i--) {
        if(sortedArray[i] === min || sortedArray[i] === max) {
            sortedArray.splice(i, 1)
        }
    }

    console.log(sortedArray)
    return sortedArray.length
};

nums1 = [11, 7, 2, 15, 15, 20, 100]
nums2 = [-71,-71,93,-71,40]
nums3 = [-3,3,3,90]

console.log(countElements(nums1))
console.log(countElements(nums2))
console.log(countElements(nums3))