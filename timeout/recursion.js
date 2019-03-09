function printTImeout() {
    var i = 0;
    var  timeId = setTimeout(function iteration() {
        console.log(i);
        if(i < 20) {
            setTimeout(iteration, 100)
        }
        i++;
    }, 100);
}

printTImeout();