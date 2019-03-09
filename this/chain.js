var chain = {
    step : 0,
    add : function() {
        this.step++;
        return this;
    },
    substract : function() {
        this.step--;
        return this;
    },
    show : function() {
        console.log(this.step);
        return this;
    }
};

chain.show().add().add().show();