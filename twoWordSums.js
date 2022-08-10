// The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.)
// The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer

// For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21
// You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive

// Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise

// firstWord = "acb", secondWord = "cba", targetWord = "cdb"
// Output: true

var isSumEqual = function(firstWord, secondWord, targetWord) {
    const alphaVal = (s) => s.toLowerCase().charCodeAt(0) - 97

    let firstTotal = "";
    for(i=0;i<firstWord.length;i++) {
        firstTotal += alphaVal(firstWord[i])
    }

    let secTotal = "";
    for(j=0;j<secondWord.length;j++) {
        secTotal += alphaVal(secondWord[j]);
    }

    wordSum = parseInt(firstTotal) + parseInt(secTotal);
    
    targetTotal = "";
    for(k=0;k<targetWord.length;k++) {
        targetTotal += alphaVal(targetWord[k]);
    }
    
    if(wordSum == targetTotal) {
        return true
    } else {
        return false
    }
};



console.log(isSumEqual("acb", "cba", "cdb"));
console.log(isSumEqual("aaa", "a", "aab"));
