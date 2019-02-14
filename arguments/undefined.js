function f(x) {
    if(arguments.length) {
        console.log("1");
    }
    else{
        console.log("0");
    }
}

f(undefined);
f();    
f(1);
f(1,2,3,4)