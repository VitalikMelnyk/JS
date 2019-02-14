function makeCounter() {
    var count = 1;

    return {
        getNext : function() {
            return count++;
        },

        set : function(value) {
            count = value;
        },

        reset : function () {
            count = 1;
        }
    }
}

var counter = makeCounter();

console.log(counter.getNext());
console.log(counter.getNext());
counter.set(7);
console.log(counter.getNext());
console.log(counter.getNext());
counter.reset();
console.log(counter.getNext());