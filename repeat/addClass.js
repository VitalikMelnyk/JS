var object = {
    name : "В информатике односвязный список представляет собой структуру данных"
};


function addClass(obj, cls) {
    var tmp = obj.name.split(" ");
    for(var i = 0; i < tmp.length; i++){
        if(tmp[i] == cls){
            return;
        }
    }
     tmp.push(cls);   

    obj.name = tmp.join(' ');
}
addClass(object, "вы");
console.log(object.name);