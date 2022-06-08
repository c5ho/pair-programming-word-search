//Search for word in original matrix; this searches "horizontally"
//transpose the matrix; matrix => newMatrix
//Search for word in newMatrix; this searches "vertically"

const wordSearch = (letters, word) => { 
  if (letters.length === 0) {
    return false;
  }
  if (word > letters.length || word > letters[0].length) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      }
  }
  return false;
}

const transpose = function (matrix) {
  // Put your solution here 
  let oldRowLength = matrix.length;
  let oldColumnLength = matrix[0].length;

  //in order to transpose the matrix, we must transpose the coordinates
  //for each element, ie., (col,row)=>(row,col)
  let newMatrix = [];
  for (let row = 0; row < oldColumnLength; row++) {
    newMatrix.push([]); //creating a row for each col from original matrix
    for (let col = 0; col < oldRowLength; col++) {
      newMatrix[row].push(matrix[col][row]); //pushing the value from each original row to each new col
    }
  }
  return newMatrix;  
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

module.exports = {
  wordSearch, 
  transpose
}