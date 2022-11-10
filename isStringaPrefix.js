// Given a string s and an array of strings words, determine whether s is a prefix string of words.

// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.

// Return true if s is a prefix string of words, or false otherwise.

// s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// Output: true
// Explanation:s can be made by concatenating "i", "love", and "leetcode" together.

// s = "iloveleetcode", words = ["apples","i","love","leetcode"]
// Output: false
// Explanation: It is impossible to make s using a prefix of arr.

const isPrefixString = function(s, words) {
    let combined = "";
    let i = 0;

    while(combined.length < s.length) {
        combined += words[i]
        i++
    }

    return s === combined
};

let s1 = "iloveleetcode"
let words1 = ["i", "love", "leetcode", "apples"]
let words2 = ["apples", "i", "love", "leetcode"]

let s2 = "a"
let words3 = ["aa","aaaa","banana"]

let s3 = "aaa"
let words4 = ["aa","aaa","fjaklfj"]

console.log(isPrefixString(s1, words1))