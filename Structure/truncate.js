function truncate(str, maxlength) {
    if(str < maxlength) {
        return str;
    }
    else {
        return str = str.slice(0, maxlength-3) + "...";
    }
}

var str = "Вот, что мне хотелось бы сказать на эту тему",
    maxlength = 20;
 
    
console.log(truncate(str, maxlength));    