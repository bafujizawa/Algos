// You are given an integer array height of length n
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i])
//
// Find two lines that together with the x-axis form a container, such that the container contains the most water
//
// Return the maximum amount of water a container can store
//
// Notice that you may not slant the container

// height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]
// In this case, the max area of water (blue section) the container can contain is 49

const maxArea = function(height) {
    let maxArea = 0
    let left = 0
    let right = height.length - 1
    let tempHeight = 0;

    while(left < right) {
        let width = right - left

        // console.log(height[left], height[right])

        if(height[left] <= height[right]) {
            tempHeight = height[left]
        } else {
            tempHeight = height[right]
        }

        // console.log(tempHeight)

        if(maxArea < tempHeight * width) maxArea = tempHeight * width

        // console.log(maxArea)

        if(height[left] <= height[right]) {
            left++
        } else {
            right--
        }
    }

    return maxArea
}

let height1 = [1,8,6,2,5,4,8,3,7]
let height2 = [1,1]
console.log(maxArea(height1))