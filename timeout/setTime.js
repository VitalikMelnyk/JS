function show(str) {
    console.log("Hello" + str);
}



var timedId = setTimeout(show, 2000, " Vitalik");
console.log(timedId);
// clearTimeout(timedId);
// setTimeout(function() {
//     console.log("Qaprosoft");
// }, 2000);