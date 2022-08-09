// You are given a string time in the form of hh:mm, where some of the digits in the string are hidden (represented by ?)
// The valid times are those inclusively between 00:00 and 23:59
// Return the latest valid time you can get from time by replacing the hidden digits

// time = "2?:?0"
// "23:50"

var maximumTime = function(time) {
    returnedTime = ""
    if(time[0] == "?") {
        if(time[1] > 3) {
            returnedTime += 1
        } else {
            returnedTime += 2
        }
    } else {
        returnedTime += time[0]
    }
    if(time[1] == "?") {
        if(time[0] == 2) {
            returnedTime += 3
        } else {
            returnedTime += 9
        }
    } else { 
        returnedTime += time[1]
    }
    returnedTime += ":"
    if(time[3] == "?") {
        console.log("hello")
        returnedTime += 5
    } else {
        returnedTime += time[3]
    }
    if(time[4] == "?") {
        returnedTime += 9
    } else {
        returnedTime += time[4]
    }

    return returnedTime
};


console.log(maximumTime('?4:03'))