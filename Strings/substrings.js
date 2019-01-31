// var str = "London is the capital of Great Britain";
// // console.log(str.substring(0, 10));
// // console.log(str.substring(5));
// // console.log(str.substr(2,10));
// // console.log(str.substr(2));
// // console.log(str.slice(1,18));
// // console.log(str.slice(0,-1));


// console.log(String.fromCharCode(1000));
// console.log(str.charCodeAt(0));
var str = " ";
for(var i = 1; i <= 1200; i++){
    str = str + String.fromCharCode(i);
}
console.log(str);