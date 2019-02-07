 var arr = [8,12,10,1,0,7,4,8,6,11,15];

 var sortedArr = [];

 for(var i = 0; i < arr.length; i++){
     sortedArr[i] = arr[i];
 }

 function compare(a, b){
     return a - b;
 }
sortedArr.sort(compare);
console.log(sortedArr);
console.log(arr);


// var arr = [1,4,2,3,6,7,8,45,25,326,346,75,2,13,346,364,314,23,35,6,5];

// var newArr = arr.slice().sort(compare);
// console.log(newArr);
// console.log(arr);
