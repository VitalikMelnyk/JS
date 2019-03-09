var obj = {
    name : "Vitaliy",
    age : 19,
    sayHi : function() {
            show(this);
    }
};

function show(q) {
    console.log(q.name);
}

obj.sayHi();


