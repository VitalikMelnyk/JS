function Watch(options) { 
    var template = options.template;
    var timer;

    function render() {
        var date = new Date();
        var hours = date.getHours();
        if(hours < 10) {
            hours = "0" + hours;
        };

        var minutes = date.getMinutes();
        if(minutes < 10) {
            minutes = "0" + minutes;
        };

        var second = date.getSeconds();
        if(second < 10) {
            second = "0" + second;
        }

        var output = template.replace("h", hours).replace("m", minutes).replace("s", second);
        console.log(output);
    }

    this.start = function() {
        render();
        timer = setInterval(render, 1000);
    };
    this.end = function() {
        clearInterval(timer);   
    }


}

var watch = new Watch({
    tamplete : "h:m:s"
});

watch.start();