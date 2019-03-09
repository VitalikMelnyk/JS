setInterval(function() {
    runner1.step();
},15);

setTimeout(function go() {
    runner2.step();
    setTimeout(go, 15);

},15);

setTimeout(function() {
    console.log(runner1.step);
    console.log(runner2.step);
},5000);

function Runner() {
    step : function() { 
        

    }
}

var runner1 = new Runner();

var runner2 = new Runner();