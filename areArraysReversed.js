// You are given two integer arrays of equal length target and arr
// In one step, you can select any non-empty subarray of arr and reverse it. You are allowed to make any number of steps

// Return true if you can make arr equal to target or false otherwise

// target = [1,2,3,4], arr = [2,4,1,3]
// Output: true
// Explanation: You can follow the next steps to convert arr to target:
//     1- Reverse subarray [2,4,1], arr becomes [1,4,2,3]
// 2- Reverse subarray [4,2], arr becomes [1,2,4,3]
// 3- Reverse subarray [4,3], arr becomes [1,2,3,4]
// There are multiple ways to convert arr to target, this is not the only way to do so.

const canBeEqual = function(target, arr) {
    if(target.length === arr.length) {
        target = target.sort((a,b) => a - b)
        arr = arr.sort((a,b) => a - b)
        return target.every((element, index) => {
            return element === arr[index];
        })
    }

    return false
};

let target1 = [1,2,3,4]
let arr1 = [2,1,3,5]
console.log(canBeEqual(target1, arr1))

