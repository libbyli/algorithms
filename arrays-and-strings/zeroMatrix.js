/* Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are
set to 0. */

const zeroRow = (matrix, row) => {
  for (let i = 0; i < matrix[row].length; i += 1) {
    matrix[row][i] = 0;
  }
};

const zeroColumn = (matrix, column) => {
  for (let i = 0; i < matrix.length; i += 1) {
    matrix[i][column] = 0;
  }
};

const zeroMatrix = (matrix) => {
  const rowHolder = [];
  const columnHolder = [];
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === 0) {
        rowHolder.push(i);
        columnHolder.push(j);
      }
    }
  }

  for (let a = 0; a < rowHolder.length; a += 1) {
    zeroRow(matrix, a);
  }

  for (let b = 0; b < columnHolder.length; b += 1) {
    zeroColumn(matrix, b);
  }

  return matrix;
};

zeroMatrix([[1, 0, 3], [0, 5, 6], [7, 8, 9]]); // [[0, 0, 0], [0, 0, 0], [0, 0, 9]]
