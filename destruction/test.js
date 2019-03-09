// let [first, second, third, fourth] = [1,2,3,4];
// console.log(first);

// "use strict";
// function say() {
//     console.log("Hello!");
// }

// let [first, last=say()] = ["Vitaliy"];
// console.log(last);
'use strict';

function defaultLastName() {
  return Date.now() + '-visitor';
}

// lastName получит значение, соответствующее текущей дате:
let [firstName, lastName=defaultLastName()] = ["Вася"];

console.log(firstName); // Вася
console.log(lastName);  // 1436...-visitor