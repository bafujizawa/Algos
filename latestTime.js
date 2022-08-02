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