
// You should implement your task here.

module.exports = function towelSort(matrix) {
  const result = [];
  if (matrix === undefined){
    return []
  }
  for (let i=0; i < matrix.length; i++) {
    let isOdd = (i+1)%2;
    if (isOdd !== 0) {
      result.push(...matrix[i])
    } else {
      let reverse = matrix[i].slice().reverse()
      result.push(...reverse)
    }
  }
  return result;
}
