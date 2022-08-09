// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
// Return the sum of all the unique elements of nums.

sampleNums1 = [1,2,3,2]
// Output: 4

sampleNums2 = [1,1,1,1,1]
// Output: 0

sampleNums3 = [1,2,3,4,5]
// Output: 15

var sumOfUnique = function(nums) {
    numberMap = {};
    finalSum = 0;

    for(i=0;i<nums.length;i++) {
        if(numberMap[nums[i]]) {
            numberMap[nums[i]] += 1;
        } else {
            numberMap[nums[i]] = 1;
        }
    }
    // return numberMap
    for(const [key, value] of Object.entries(numberMap)) {
        if(value === 1) {
            finalSum += parseInt(key)
        }
    }
    return finalSum;

};

console.log(sumOfUnique(sampleNums1))
console.log(sumOfUnique(sampleNums2))
console.log(sumOfUnique(sampleNums3))