// Given an m x n binary matrix mat, return the number of special positions in mat
//
// A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed)

// mat = [[1,0,0],[0,0,1],[1,0,0]]
// Output: 1
// Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0

const numSpecial = function(mat) {
    let specialCount = 0;

    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++) {
            if(mat[i][j] === 1 && mat[i].reduce((a,b) => a+b) <= 1) {
                if(isValidColumn(j)) specialCount++
            }
        }
    }
    return specialCount;

    function isValidColumn(j) {
        let columnCount = 0;
        for(let i = 0; i < mat.length; i++) {
            if(mat[i][j] === 1) {
                columnCount++
            }
        }
        return columnCount <= 1
    }
};

let mat1 = [[1,0,0],[0,0,1],[0,1,0]]
console.log(numSpecial(mat1))

// let newArray = []
// for(let i = 0; i < mat1.length; i++) {
//     newArray.push(mat1[i][0])
// }
// console.log(newArray)