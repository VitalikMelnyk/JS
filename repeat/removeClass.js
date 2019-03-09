function removeClass(object, cls){
    var newObject = object.name.split(" ");
    for(var i = 0; i < newObject.length; i++){
        if(newObject[i] == cls){
            newObject.splice(i, 1);
            i--;
        }
    }
}


var obj = {
    name : "my home home"
}