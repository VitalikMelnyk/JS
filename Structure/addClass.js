var obj = {
    name : "Open menu menu"
};

function addClass(object, cls) {
    var  newObj = object.name.split(" ");
    for(var i = 0; i < newObj.length; i++) {
        if(newObj[i] === cls){
            return;
        }
    }
    newObj.push(cls);
    return object.name = newObj.join(' ');
}

addClass(obj, "Open");
addClass(obj, "menu");
addClass(obj, "of");
addClass(obj, "Goyra");

console.log(obj.name);