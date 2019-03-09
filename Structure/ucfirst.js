function ucfirst(str) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}


var str = "vitaliy";

console.log(ucfirst(str));