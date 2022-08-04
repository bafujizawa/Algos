path1 = [["pYyNGfBYbm","wxAscRuzOl"],["kzwEQHfwce","pYyNGfBYbm"]]
// path2 = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// output = "Sao Paulo"

finalCity = {};

var destCity = function(paths) {
    for(i=0;i<paths.length;i++) {
        finalCity[paths[i][0]] = paths[i][1]
    }
    // console.log(Object.keys(finalCity))
    // console.log(Object.values(finalCity))
    for(j=0;j<Object.keys(finalCity).length;j++) {
        if(!Object.keys(finalCity).includes(Object.values(finalCity)[j])) {
            // delete finalCity[Object.values(finalCity)[j]]
            // console.log(Object.values(finalCity)[j])
            return Object.values(finalCity)[j]
        }
    }
    // return Object.keys(finalCity)
};



// console.log(destCity(path1))
console.log(destCity(path1))

