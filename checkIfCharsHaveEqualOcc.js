// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

// s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.

const areOccurrencesEqual = function(s) {
    let map = {};
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]]) {
            map[s[i]]++
        } else {
            map[s[i]] = 1
        }
    }

    let occurrence = Object.values(map)
    let runner = occurrence[0]
    for(let j = 1; j < occurrence.length; j++) {
        if(runner !== occurrence[j]) {
            return false
        }
    }
    return true
};

let s1 = 'aaabb'
let s2 = 'abacbc'
console.log(areOccurrencesEqual(s2))