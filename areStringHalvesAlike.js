// You are given a string s of even length
// Split this string into two halves of equal lengths, and let a be the first half and b be the second half
//
// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U')
// Notice that s contains uppercase and lowercase letters.
//
// Return true if a and b are alike. Otherwise, return false.

// s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

// s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike
// Notice that the vowel o is counted twice

const halvesAreAlike = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    let aCount = 0;
    let bCount = 0;

    for(let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) {
            if(s.length / i > 2) {
                aCount += 1
            } else {
                bCount += 1
            }
        }
    }

    return aCount === bCount
};

let s = "book"
let s2 = "AbCdEfGh"
console.log(halvesAreAlike(s2))