function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const transpose = [];

    for (let j = 0; j < cols; j++) {
        const currentColumn = [];

        for (let i = 0; i < rows; i++) {
            currentColumn.push(matrix[i][j]);
        }
        transpose.push(currentColumn);
    }

    return transpose;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(transposeMatrix(matrix));
