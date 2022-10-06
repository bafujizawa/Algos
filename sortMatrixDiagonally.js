// A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column
// and going in the bottom-right direction until reaching the matrix's end
// For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].

// mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
// Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]

// mat = [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]
// Output: [[5,17,4,1,52,7],[11,11,25,45,8,69],[14,23,25,44,58,15],[22,27,31,36,50,66],[84,28,75,33,55,68]]

const diagonalSort = function(mat) {
    let swaps = 0;
    for(let i = 0; i < mat.length - 1; i++) {
        for(let j = 0; j < mat[0].length - 1; j++) {
            if(mat[i][j] > mat[i + 1][j + 1]) {
                let temp = mat[i][j];
                mat[i][j] = mat[i + 1][j + 1];
                mat[i + 1][j + 1] = temp;
                swaps++
            }
        }
    }
    if(swaps > 0) {
        diagonalSort(mat)
    }
    return mat

}

// let mat1 = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
let mat2 = [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]
console.log(diagonalSort(mat2))

