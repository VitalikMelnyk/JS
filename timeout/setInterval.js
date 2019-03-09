// var timedId = setInterval(function() {
//     console.log("Hello World!");
// },2000);

// setTimeout(function() {
//     clearInterval(timedId);
//     console.log("Welcome");
// }, 10000);

var timedId = setTimeout(function tick(){
    console.log("Hello");
    timedId = setTimeout(tick(), 2000);
},  10);