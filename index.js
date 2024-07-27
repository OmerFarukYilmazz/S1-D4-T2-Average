function aboveAverage(array) {
  /* kodlar buraya */
  if (array.length < 1) {
    return 0;
  }
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  let avarage = total / array.length;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (avarage < array[i]) {
      count++;
    }
  }
  return count;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = aboveAverage;
