function borrowMe() {
    arguments.join = [].join;
    var arg = arguments.join(":");
    console.log(arg);
}

borrowMe(1,2,3,4,5);

