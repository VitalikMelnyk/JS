// var a = 3,
//     b = 4;

// [a, b] = [b, a];

// console.log(a);

let first = 25,
    second = 50,
    third = 78;

let things = {
    first : 77,
    second : 45,
    third : 1
};

({first : firstNumber , second : secondNumber, third : thirdNumber} = things);

console.log(firstNumber);