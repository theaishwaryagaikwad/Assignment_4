function searchMatrix(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    let row = 0;
    let col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            row++;
        } else {
            col--;
        }
    }
    return false;
}

const matrix = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 28, 35, 45],
    [32, 33, 39, 50]
];

const target = 28;
console.log(searchMatrix(matrix, target)); 
