// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
// and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

const threeSum = function(nums, target) {
    nums = nums.sort( ( a, b) => a - b )
    let solution = []

    console.log(nums)

    for(let i = 0; i < nums.length - 2; i++) {

        if(i > 0 && nums[i] === nums[i - 1]) continue

        let low = i + 1
        let high = nums.length - 1

        while(low < high) {
            console.log(nums[low], nums[high])
            let sum = nums[i] + nums[low] + nums[high]

            if(sum < target) {
                low++
            } else if(sum > target) {
                high--
            } else {
                solution.push([nums[i], nums[low], nums[high]])
                high--
                low++
                while(nums[high] === nums[high + 1] && low < high) {
                    high--
                }
            }
        }
    }

    return solution
};

let nums1 = [ -1, 0, 1, 2, -1, -4 ]
let nums2 = [ -3, -2, -1, 0, 1, 2, 3, 4 ]
let nums3 = [ -2, 0, 0, 2, 2 ]
let nums4 = [ 2, 2, 2 ,2 ]
console.log(threeSum(nums4, 6))
