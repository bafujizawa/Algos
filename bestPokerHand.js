// You are given an integer array ranks and a character array suits
// You have 5 cards where the ith card has a rank of ranks[i] and a suit of suits[i].

// The following are the types of poker hands you can make from best to worst:

// "Flush": Five cards of the same suit
// "Three of a Kind": Three cards of the same rank
// "Pair": Two cards of the same rank
// "High Card": Any single card
// Return a string representing the best type of poker hand you can make with the given cards

// Note that the return values are case-sensitive

// ranks = [13,2,3,1,9], suits = ["a","a","a","a","a"]
// Output: "Flush"
// Explanation: The hand with all the cards consists of 5 cards with the same suit, so we have a "Flush"

const bestHand = function(ranks, suits) {
    if(new Set(suits).size === 1) {
        return "Flush"
    }
    let count = 1;
    for(let i = 0; i < ranks.length; i++) {
        for(let j = i+1; j<ranks.length; j++) {
            if(ranks[i] === ranks[j]) {
                count++
            }
        }
    }
    let rankMap = {};

    for(let i = 0;i<ranks.length;i++) {
        if(rankMap[ranks[i]]) {
            rankMap[ranks[i]]++
            if(rankMap[ranks[i]] >= 3) return "Three of a Kind"
        } else {
            rankMap[ranks[i]] = 1;
        }
    }

    return Object.keys(rankMap).length === 5? "High Card" : "Pair"

};

ranks1 = [13,2,13,1,9], suits1 = ["a","a","a","a","b"]
console.log(bestHand([4,4,2,4,4], ["d","a","b","a","c"]))