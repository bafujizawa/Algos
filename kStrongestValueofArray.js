// Given an array of integers arr and an integer k

// A value arr[i] is said to be stronger than a value arr[j] if |arr[i] - m| > |arr[j] - m| where m is the median of the array
// If |arr[i] - m| == |arr[j] - m|, then arr[i] is said to be stronger than arr[j] if arr[i] > arr[j]

// Return a list of the strongest k values in the array. return the answer in any arbitrary order

// Median is the middle value in an ordered integer list. More formally, if the length of the list is n,
// the median is the element in position ((n - 1) / 2) in the sorted list (0-indexed).

// For arr = [6, -3, 7, 2, 11], n = 5 and the median is obtained by sorting the array arr = [-3, 2, 6, 7, 11]
// and the median is arr[m] where m = ((5 - 1) / 2) = 2. The median is 6
// For arr = [-7, 22, 17, 3], n = 4 and the median is obtained by sorting the array arr = [-7, 3, 17, 22]
// and the median is arr[m] where m = ((4 - 1) / 2) = 1. The median is 3

// arr = [1,2,3,4,5], k = 2
// Output: [5,1]
// Explanation: Median is 3, the elements of the array sorted by the strongest are [5,1,4,2,3]. The strongest 2 elements are [5, 1]. [1, 5] is also accepted answer
// Please note that although |5 - 3| == |1 - 3| but 5 is stronger than 1 because 5 > 1

const getStrongest = function(arr, k) {
    let median = arr.sort( (a,b) => a - b)[Math.floor(( arr.length - 1) / 2)]
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        result.push({
            medDiff: Math.abs(median - arr[i]),
            num: arr[i]
        })
    }

    // console.log(result)

    result.sort( function(a, b) {
        if(a.medDiff < b.medDiff) {
            return 1;
        } else if(a.medDiff > b.medDiff) {
            return -1;
        }

        if(a.num < b.num) {
            return 1;
        } else if(a.num > b.num) {
            return -1;
        }
    })

    console.log(result)

    return result.map(a => a.num).slice(0, k);

    // let medianMax = 0;
    // let median = arr.sort( (a,b) => a - b)[Math.floor((arr.length - 1) / 2)]
    // let solutionArr = [];
    //
    // if(arr.length === k) {
    //     return arr
    // }
    //
    // for(let i = 0; i < arr.length; i++) {
    //     if(Math.abs(median - arr[i]) > medianMax) {
    //         medianMax = Math.abs(median - arr[i])
    //     }
    // }
    //
    // // console.log(arr)
    // let runner = 0;
    //
    // while(solutionArr.length < k) {
    //     if(Math.abs((median - arr[runner])) === medianMax) {
    //         solutionArr.push(arr[runner])
    //         arr.splice(runner, 1)
    //         // console.log(arr)
    //     }
    //     runner++
    //     // console.log(runner)
    //     if(runner >= arr.length) {
    //         runner = 0
    //         medianMax--
    //     }
    // }
    //
    // return solutionArr
};

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [-3, 2, 6, 7, 11]
let arr3 = [6, -3, 7, 2, 11]
let arr4 = [1, 1, 3, 5, 5]
let arr5 = [6, 7, 11, 7 ,6, 8]

console.log(getStrongest(arr4, 2))

// arr1.splice(0, 1)
// console.log(arr1)