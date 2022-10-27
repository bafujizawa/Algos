// Given a string s, find the length of the longest substring without repeating characters

// s = "abcabcbb"
// Output: 3.  "abc", with the length of 3.

// s = "bbbbb"
// Output: 1

// s = "pwwkew"
// Output: 3 

const lengthOfLongestSubstring = function(s) {
    let finalLength = 0;

    for(let i = 0; i < s.length; i++) {
        let temp = "";
        let runner = i;
        while(s[runner]) {
            if(!temp.includes(s[runner])) {
                temp += s[runner]
                // console.log(temp)
            } else {
                break
            }
            runner++
            if(finalLength < temp.length) {
                finalLength = temp.length
            }
        }
    }

    return finalLength;
};

test1 = 'abcabcbb';
test2 = 'bbbbb';
test3 = 'pwwkew';
test4 = 'abcabcbb'

console.log(lengthOfLongestSubstring(test1));