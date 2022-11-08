// At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time(in the order specified by bills)
// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill
// You must provide the correct change to each customer so that the net transaction is that the customer pays $5
//
// Note that you do not have any change in hand at first.
//
// Given an integer array bills where bills[i] is the bill the ith customer pays,
// return true if you can provide every customer with the correct change, or false otherwise.

// bills = [5,5,5,10,20]
// Output: true
// Explanation:
// From the first 3 customers, we collect three $5 bills in order
// From the fourth customer, we collect a $10 bill and give back a $5
// From the fifth customer, we give a $10 bill and a $5 bill
// Since all customers got correct change, we output true

const lemonadeChange = function(bills) {
    let fives = 0;
    let tens = 0
    for(let i = 0; i < bills.length; i++) {
        if(bills[i] === 5) {
            fives++
        }
        if(bills[i] === 10) {
            fives--
            tens++
        }
        if(bills[i] === 20) {
            fives--
            tens--
        }
        if(tens < 0 && tens + fives / 2 < 0) {
            return false
        }
        if(fives < 0) {
            return false
        }
    }
    console.log(fives, tens)
    return true

};

let group1 = [5,5,5,10,20]
let group2 = [5,5,10,10,20]
let group3 = [5,5,10,20,5,5,5,5,5,5,5,5,5,10,5,5,20,5,20,5]

console.log(lemonadeChange(group2))