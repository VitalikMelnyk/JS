var user = {
    name : "Vitalik",
    age : 20
};

var newUser = copy({}, user);

function copy(dst) {
    // var dst = arguments[0];

    for(var i = 1; i < arguments.length; i++){
        var arg = arguments[i];
        for(var key in arg){
            dst[key] = arg[key];
        }
    }
    return dst;
}

console.log(newUser);
console.log();