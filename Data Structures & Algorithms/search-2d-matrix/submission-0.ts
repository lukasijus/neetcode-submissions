class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        for(let col = 0; col < matrix.length; col++ ) {
            if(matrix[col][0] === target)  return true 
            if(matrix[col][0] <= target && matrix[col][matrix[col].length - 1] >= target ) {
                for(let row = 0; row < matrix[col].length; row++) {
                    if(matrix[col][row] === target) return true
                }
            }
        }
        return false 
    }
}
