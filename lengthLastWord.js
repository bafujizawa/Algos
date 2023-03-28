// Given a string s consisting of words and spaces, return the length of the last word in the string

// A word is a maximal substring consisting of non-space characters only

// s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5

const lengthLastWord = function(s) {
    let isLast = false
    let counter = 0

    for(let i = s.length - 1; i >=0; i-- ) {
        if(s[i] !== " ") {
            isLast = true
        }
        if(s[i] === ' ' && isLast) break
        if(isLast) counter++

    }

    return counter
}

let s0 = 'Hello World'
let s1 = '   fly me   to   the moon  '
let s3 = 'luffy is still joyboy'
console.log(lengthLastWord(s3))