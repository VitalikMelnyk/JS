// var [name, age] = ["Vitaliy", 25];
// let[, , word] = "My name is".split(" ");

// let [first, second, third, ...rest] = [1,2,3,4,5,6,7,8,9,0];


// // console.log(name);
// // console.log(age);
// console.log(first);

// console.log(rest[0]);

let things = {
    width : 200
};

let {width, height = 200, depth = 100} = things;

console.log(height);