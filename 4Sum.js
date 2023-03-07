// Given an array nums of n integers,
// return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct
//     nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order

// nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

const fourSum = function(nums, target) {
    let solution = []
    nums = nums.sort( (a,b) => a - b )

    for(let i = 0; i < nums.length - 3; i++) {
        for(let j = i + 1; j < nums.length - 2; j++) {
            let mid = j + 1
            let high = nums.length - 1
            while(mid < high) {
                let sum = nums[i] + nums[j] + nums[mid] + nums[high]

                if(sum < target) mid++
                else if(sum > target) high--
                else {
                    solution.push([nums[i], nums[j], nums[mid], nums[high]])
                    high--
                    mid++
                    while(nums[high] === nums[high + 1] && mid < high) high--
                    while(nums[mid] === nums[mid - 1] && mid < high) mid++
                }
            }
            while(nums[j] === nums[j + 1]) j++
        }
        while(nums[i] === nums[i + 1]) i++
    }

    return solution
}

let nums1 = [1,0,-1,0,-2,2]
let nums2 = [-12, -10, -5, -2, -1, 1, 2, 4, 5, 7, 9, 12]
let nums3 = [-3, -1, 0, 0, 2, 4, 5]
let nums4 = [ 2, 2, 2, 2, 2 ]
console.log(fourSum(nums4, 8))