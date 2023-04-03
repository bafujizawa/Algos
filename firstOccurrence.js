// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack
// or -1 if needle is not part of haystack

// haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

const strStr = function(haystack, needle) {

    // for(let i = 0; i < haystack.length; i++) {
    //     // let sliced = haystack.slice(i, i + needle.length)
    //     // console.log(haystack.slice(i, i + needle.length))
    //     if(needle === haystack.slice(i, i + needle.length)) return i
    // }


    return haystack.indexOf(needle)
}

let haystack1 = "leetcodeleet"

console.log(strStr(haystack1, "leet"))