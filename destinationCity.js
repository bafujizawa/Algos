// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi
// Return the destination city, that is, the city without any path outgoing to another city
// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city

path1 = [["pYyNGfBYbm","wxAscRuzOl"],["kzwEQHfwce","pYyNGfBYbm"]]
// path2 = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// output = "Sao Paulo"

finalCity = {};

var destCity = function(paths) {
    for(i=0;i<paths.length;i++) {
        finalCity[paths[i][0]] = paths[i][1]
    }

    for(j=0;j<Object.keys(finalCity).length;j++) {
        if(!Object.keys(finalCity).includes(Object.values(finalCity)[j])) {
            return Object.values(finalCity)[j]
        }
    }
};



// console.log(destCity(path1))
console.log(destCity(path1))

