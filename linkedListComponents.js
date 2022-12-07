// You are given the head of a linked list containing unique integer values and
// an integer array nums that is a subset of the linked list values.

// Return the number of connected components in nums where two values are connected if they appear consecutively in the linked list.

// head = [0,1,2,3], nums = [0,1,3]
// Output: 2
// Explanation: 0 and 1 are connected, so [0, 1] and [3] are the two connected components.

const numComponents = function(head, nums) {

    let runner = head;
    let headSet = {};
    let numList = [];
    let count = 1;

    while(runner) {
        headSet[runner.val] = i
        runner = runner.next
        i++
    }

    for(let j = 0; j < nums.length; j++) {
        numList.push(headSet[nums[j]])
    }

    numList.sort( (a,b) => a - b)

    for(let k = 0; k < numList.length - 1; k++) {
        if(numList[k + 1] - numList[k] !== 1) count++
        console.log(numList[k + 1] - numList[k])
    }

    return count
};

let head1 = [0,1,2,3,4]
let nums1a = [0,1,3] // output = 2
let nums1b = [0,3,1,4] // output = 2

let head2 = [0,3,2,4,1]
// let nums2 = [3,0,2] // output = 1

// console.log(numComponents(head1, nums1b))
console.log(numComponents([0,1,2,3], [0,1,3]))