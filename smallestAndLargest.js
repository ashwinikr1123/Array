// find the largest and smallest number in an array

function smallestNum(arr) {
  let smallNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallNum) {
      smallNum = arr[i];
    }
  }
  return smallNum;
}
console.log(smallestNum([12, 3, 7]));

// greatest Number in an array

const greatesNum = function (newArr) {
  let largestNum = newArr[0];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > largestNum) {
      largestNum = newArr[i];
    }
  }
  return largestNum;
};

console.log(greatesNum([45, 89, 36, 97, 44]));
