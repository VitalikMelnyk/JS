var toString = {}.toString;

let date = new Date;
console.log(toString.call(date));
let arr = [1,2,3,4,5,6];
// console.log(typeof arr);
// console.log(toString.call(arr));
console.log(Array.isArray(arr));