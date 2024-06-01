function CommonElements(matrix) {
    const numRows = matrix.length;
    const commonElements = new Set(matrix[0]); 

    for (let i = 1; i < numRows; i++) {
        const currentRowSet = new Set(matrix[i]);

        for (const element of commonElements) {
            if (!currentRowSet.has(element)) {
                commonElements.delete(element);
            }
        }
    }

    return Array.from(commonElements);
}

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

console.log(CommonElements(matrix)); 
