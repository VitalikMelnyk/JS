function largestOfFour(arr) {
    return arr.map(subArr => Math.max(...subArr));
  }

var arr = [1,23,4,3,5],
    arr1 = [0,2,-4,-5];

console.log(largestOfFour(arr));
console.log(largestOfFour(arr1));