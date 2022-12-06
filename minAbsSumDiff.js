// You are given two positive integer arrays nums1 and nums2, both of length n
// The absolute sum difference of arrays nums1 and nums2 is defined as the sum of |nums1[i] - nums2[i]| for each 0 <= i < n (0-indexed).

// You can replace at most one element of nums1 with any other element in nums1 to minimize the absolute sum difference.

// Return the minimum absolute sum difference after replacing at most one element in the array nums1. Since the answer may be large, return it modulo 109 + 7.

// |x| is defined as:
//
// x if x >= 0, or
// -x if x < 0.

// nums1 = [1,7,5], nums2 = [2,3,5]
// Output: 3
// Explanation: There are two possible optimal solutions:
// - Replace the second element with the first: [1,7,5] => [1,1,5], or
// - Replace the second element with the third: [1,7,5] => [1,5,5].
// - Both will yield an absolute sum difference of |1-2| + (|1-3| or |5-3|) + |5-5| = 3.

const minAbsoluteSumDiff = function(nums1, nums2) {
    let arrayDiff = []
    let maxIdx = 0;
    let hashMap = new Set(nums1)

    for(let i = 0; i < nums1.length; i++) {
        arrayDiff.push(Math.abs(nums1[i] - nums2[i]))
    }

    // console.log(arrayDiff)

    let max = Math.max(...arrayDiff)

    // console.log("Maximum: ", max)

    for(let j = 0; j < arrayDiff.length; j++) {
        if(max === arrayDiff[j]) {
            maxIdx = j
            break
        }
    }

    // console.log("Max Index: ", maxIdx)

    let min = Math.abs(nums1[0] - nums2[maxIdx]);
    // console.log("Minimum: ", min)
    let minValue = nums1[maxIdx];

    hashMap.forEach((element) => {
        // console.log("Element: ", element)
        // console.log(Math.abs(element - nums2[maxIdx]))
        if(min >= Math.abs(element - nums2[maxIdx])) {
            min = Math.abs(element - nums2[maxIdx]);
            minValue = element;
            // console.log("Element: ", element)
        }
    })

    // console.log("Min Value: ", minValue)
    // console.log(nums1)
    nums1[maxIdx] = minValue
    // console.log(nums1)

    let finalArrayDiff = []

    for(let l = 0; l < nums1.length; l++) {
        finalArrayDiff.push(Math.abs(nums1[l] - nums2[l]))
    }

    // return minValue
    return finalArrayDiff.reduce((a,b) => a + b)
};

let A1 = [1,7,5]
let A2 = [2,3,5]

let B1 = [2,4,6,8,10]
let B2 = [2,4,6,8,10]

let C1 = [1,10,4,4,2,7]
let C2 = [9,3,5,1,7,4]

console.log(minAbsoluteSumDiff(A1, A2))
console.log(minAbsoluteSumDiff(B1, B2))
console.log(minAbsoluteSumDiff(C1, C2))
