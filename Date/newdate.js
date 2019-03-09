var start = new Date;

for(var i = 0; i < 1000000; i++) {
    var doSmth = i * i * i; 
}

var end = new Date;

console.log("This event is executed " + (end - start) + " ms" );