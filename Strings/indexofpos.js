var str = "My name is Vitaliy. His name is Michael. Her name is Alina";
var target = "name";

var pos = 0;
while(true){
    var found = str.indexOf(target, pos);
    if(found == -1){
        break;
    }
    console.log(found);
    pos = found + 1;
}