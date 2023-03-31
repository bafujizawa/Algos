// Given two binary strings a and b, return their sum as a binary string

// a = "11", b = "1"
// Output: "100"

const addBinary = function(a, b) {
    return BigInt(`0b${a}`) + BigInt(`0b${b}`).toString(2)
}

let a1 = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
let b1 = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
// "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
console.log(addBinary(a1, b1))

// console.log(BigInt(`0b${a1}`))
// console.log(BigInt(`0b${b1}`))