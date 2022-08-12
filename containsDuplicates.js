// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct

// nums = [1,2,3,1]
// Output: true

// nums = [1,2,3,4]
// Output: false

var containsDuplicate = function(nums) {
    
    for(i=0;i<nums.length;i++) {        
        for(j=i+1;j<nums.length;j++) {
            if(nums[i] == nums[j]) {
                return true;
            }
        }
    }
    return false;
};

console.log(containsDuplicate([0,4,5,0,3,6]))
// console.log(containsDuplicate([1,2,3,4]))