//* Time Complexity - N^2

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    //* --> Outer
    let correctIndex = arr2.indexOf(arr1[i] ** 2); //* Time Complexity - O(n)  --> inner
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1); //* Time Complexity - O(n)   --> inner
  }
  return true;
}
