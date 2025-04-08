let numbers = [1, 2, 3, 4, 5, 6, 7];
function rotateArray(array, k) {
  k = k % array.length;
  let temp = array.slice(0, k);
  for (let i = k; i < array.length; i++) {
    array[i - k] = array[i];
  }
  let j = 0;
  for (let f = array.length - k; f < array.length; f++) {
    array[f] = temp[j];
    j++;
  }
  return array;
}

console.log(rotateArray(numbers, 3));
