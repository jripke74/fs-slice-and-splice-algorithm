function frankenSplice(arrOne, arrTwo, index) {
  const combinedArray = []
  combinedArray.splice(index, 0, ...arrTwo);
  combinedArray.splice(index, 0, ...arrOne);
  return combinedArray;
}
console.log(frankenSplice([1, 2, 3], [4, 5], 1));