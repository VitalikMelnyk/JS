function Watch(options) { 
    this._template = options.template;

}
Watch.prototype._render = function() {
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

        var output = this._template.replace("h", hours).replace("m", minutes).replace("s", second);
        console.log(output);
};

Watch.prototype.start = function() {
    this._render();
    this._timer = setInterval(this._render, 1000);
};
Watch.prototype.end = function() {
    clearInterval(this._timer);   
}


var watch = new Watch({
    tamplete : "h:m:s"
});

watch.start();