function findSaddlePoint(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const currentElement = matrix[i][j];

            let isMinInRow = true;
            for (let k = 0; k < numCols; k++) {
                if (matrix[i][k] < currentElement) {
                    isMinInRow = false;
                    break;
                }
            }

            let isMaxInCol = true;
            for (let k = 0; k < numRows; k++) {
                if (matrix[k][j] > currentElement) {
                    isMaxInCol = false;
                    break;
                }
            }

            if (isMinInRow && isMaxInCol) {
                return { row: i, col: j, value: currentElement };
            }
        }
    }
    
    return null;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const saddlePoint = findSaddlePoint(matrix);
if (saddlePoint !== null) {
    console.log(`Saddle point found at (${saddlePoint.row}, ${saddlePoint.col}) with value ${saddlePoint.value}`);
} else {
    console.log("No saddle point found");
}
