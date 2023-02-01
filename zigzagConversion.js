// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
// you may want to display this pattern in a fixed font for better legibility

// P   A   H   N
// A P L S I I G
// Y   I   R

// s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

const convert = function(s, numRows) {
    let map = {}
    if(numRows === 1) return s
    let converted = ""

    let runner = 1
    let goingUp = true

    for(let i = 0; i < s.length; i++) {
        console.log(runner, s[i])

        if(map[runner]) {
            map[runner] += s[i]
        } else {
            map[runner] = s[i]
        }

        if(runner >= numRows && goingUp === true) goingUp = false
        if(runner <= 1 && goingUp === false) goingUp = true

        if(goingUp === true) {
            runner++
        } else {
            runner--
        }
    }

    for(let j = 1; j <= numRows; j++) {
        converted += map[j]
    }

    return converted
}

let s1 = "PAYPALISHIRING"
console.log(convert(s1, 3))
