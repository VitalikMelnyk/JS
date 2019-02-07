function removeClass(obj, cls) {

    newObject = obj.name ? obj.name.split(" ") : [];
    for(var i = 0; i < newObject.length; i++){
        if(newObject[i] == cls){
            newObject.splice(i, 1);
            i--;
        }

    }
    return newObject = newObject.join(' ');
}

var home = {
    name : "My home home"
};

console.log(removeClass(home,"home"));
console.log(removeClass(home,"my"));
console.log(removeClass(home,"My"));
console.log(removeClass(home,"homes"));