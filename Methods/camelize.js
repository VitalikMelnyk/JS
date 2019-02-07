
function camelize(str) {
    newStr = str.split("-");
    for(var i = 1; i < newStr.length; i++){
        newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
    }
    return newStr.join('');
}

console.log(camelize("background-text-color"));