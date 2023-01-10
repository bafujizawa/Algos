// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII
// Instead, the number four is written as IV. Because the one is before the five we subtract it making four
// The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// s = "III"
// Output: 3
// Explanation: III = 3.

const romanToInt = function(s) {
    let counter = 0;

    while(s.length) {
        if(s[s.length - 1] === "I") {
            counter++
            s = s.slice(0, s.length - 1)
        }
        if(s[s.length - 1] === "V") {
            if(s[s.length - 2] === "I") {
                counter += 4
                s = s.slice(0, s.length - 2)
            } else {
                counter += 5
                s = s.slice(0, s.length - 1)
            }
        }
        if(s[s.length - 1] === "X") {
            if(s[s.length - 2] === "I") {
                counter += 9
                s = s.slice(0, s.length - 2)
            } else {
                counter += 10
                s = s.slice(0, s.length - 1)
            }
        }
        if(s[s.length - 1] === "L") {
            if(s[s.length - 2] === "X") {
                counter += 40
                s = s.slice(0, s.length - 2)
            } else {
                counter += 50
                s = s.slice(0, s.length - 1)
            }
        }
        if(s[s.length - 1] === "C") {
            if(s[s.length - 2] === "X") {
                counter += 90
                s = s.slice(0, s.length - 2)
            } else {
                counter += 100
                s = s.slice(0, s.length - 1)
            }
        }
        if(s[s.length - 1] === "D") {
            if(s[s.length - 2] === "C") {
                counter += 400
                s = s.slice(0, s.length - 2)
            } else {
                counter += 500
                s = s.slice(0, s.length - 1)
            }
        }
        if(s[s.length - 1] === "M") {
            if(s[s.length - 2] === "C") {
                counter += 900
                s = s.slice(0, s.length - 2)
            } else {
                counter += 1000
                s = s.slice(0, s.length - 1)
            }
        }
    }

    return counter
};