function Menu(options) {
    options = Object.create(options);
    options.width = 400;

    console.log(options.width);
    console.log(options.height);
    
}


var options = {
    width : 200,
    height : 400
};


var menu = new Menu(options);
console.log(options.width);