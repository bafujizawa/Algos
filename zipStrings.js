// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1
// If a string is longer than the other, append the additional letters onto the end of the merged string

// Return the merged string

// word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
//     word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

const mergeAlternately = function(word1, word2) {
    let max;
    if(word1.length < word2.length) {
        max = word2.length
    } else {
        max = word1.length
    }
    let zipped = ""
    for(let i = 0; i < max; i++) {
        zipped += word1[i]? word1[i] : "";
        zipped += word2[i]? word2[i] : "";
    }
    return zipped;
};

console.log(mergeAlternately("abc", "b"))