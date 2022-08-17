// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome
// that can be built with those letters

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here

// s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7

// s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1

const longestPalindrome = function (s) {

    let hashmap = {};
    let solution = 0;

    for(let i of s) {

        hashmap[i] = (hashmap[i] || 0) + 1
        console.log(hashmap["b"])

        if(hashmap[i] % 2 === 0) {
            solution += 2
        }
    }


    return s.length > solution ? solution + 1 : solution;
};

console.log(longestPalindrome("bbbcc"));