function printIntervalNumbers() {
    var i = 0;
    var timeId = setInterval(function() {
        console.log(i);
        if(i == 100) {
            clearInterval(timeId);
        }
        i++;
    }, 100);
}
printIntervalNumbers();