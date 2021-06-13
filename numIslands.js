const matrix1 = [
    [1,1,0,0,0,1],
    [1,1,0,0,0,1],
    [1,0,1,0,0,0]
];

const matrix2 = [
    [1,1,1,0,0,0],
    [1,1,0,0,0,0],
    [1,1,0,0,0,0],
    [1,0,0,0,0,0]
];

const numIslands = (matrix) => {
    if (matrix.length === 0) return 0;
    let res = 0;

    const markCell = (matrix, row, col) => {
        matrix[row][col] = NaN;
        if (matrix[row][col + 1]) markCell(matrix, row, col + 1);
        if (matrix[row + 1]?.[col]) markCell(matrix, row + 1, col);
        if (matrix[row - 1]?.[col]) markCell(matrix, row - 1, col);
    }

    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 1) {
                res++;
                markCell(matrix, row, col);
            }
        }
    }
    return res;
}

console.log(numIslands(matrix1));

