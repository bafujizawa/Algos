// Given a string s, return the longest palindromic substring in s

// s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer

const longestPalindrome = function(s) {
    const isPalindrome = function(string) {
        for(let i = 0; i < string.length / 2; i++) {
            if(string[i] !== string[string.length - i - 1]) {
                return false
            }
        }
        return true
    };

    let longestPalindrome = ""
    for(let i = 0; i < s.length - 1; i++) {
        for(let j = s.length; j >= 0; j--) {
            if(i === j) break

            let sliced = s.slice(i, j)
            if(isPalindrome(sliced) && sliced.length > longestPalindrome.length ) {
                longestPalindrome = sliced
            }
            console.log(longestPalindrome)
        }
    }

    return longestPalindrome
};

let s1 = "babad"
let s2 = "a"
console.log(longestPalindrome(s2))

