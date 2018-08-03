/* Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a
method to rotate the image by 90 degrees. Can you do this in place? */

const rotateMatrix = (matrix) => {
  for (let i = 0; i < matrix.length / 2; i += 1) {
    const first = i;
    const last = matrix.length - 1 - i;
    for (let j = first; j < last; j += 1) {
      const offset = j - first;
      const top = matrix[first][j];
      matrix[first][j] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[j][last];
      matrix[j][last] = top;
    }
  }
  return matrix;
};

rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); // [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
