// A permutation of an array of integers is an arrangement of its members into a sequence or linear order

// For example, for arr = [1,2,3], the following are all the permutations of arr
// [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1], [1,2,3]

// The next permutation of an array of integers is the next lexicographically greater permutation of its integer
// More formally, if all the permutations of the array are sorted in one container according to their lexicographical order,
// then the next permutation of that array is the permutation that follows it in the sorted container
// If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order)

// For example, the next permutation of arr = [1,2,3] is [1,3,2]
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2]
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement

// Given an array of integers nums, find the next permutation of nums

// The replacement must be in place and use only constant extra memory

// nums = [1,2,3]
// Output: [1,3,2]

const nextPermutation = function(nums) {

    let runner = 0

    while(nums[runner] >= nums[runner + 1]) {
        runner++
        if(runner >= nums.length - 1) return nums.reverse()
    }

    let a = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < nums[i + 1]) {
            a = i
        }
    }

    let b = 0
    for(let j = a; j < nums.length; j++) {
        if(nums[j] > nums[a]) {
            b = j
        }
    }

    let temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp

    let left = a + 1
    let right = nums.length - 1
    while(left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
        right--
    }

    return nums
}

let nums1 = [1, 2, 3]
let nums2 = [5, 1, 1]
let nums3 = [1, 2, 3, 4, 5]

console.log(nextPermutation(nums2))
// while(nums3 !== tempArray) {
//     console.log(tempArray)
//     tempArray = nextPermutation(tempArray)
// }