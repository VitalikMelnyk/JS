function truncate(str, maxlength) {
    if(str.length < maxlength){
        return str;
    }
    else{
        return str = str.slice(0,maxlength - 3) + "...";
    }
}

// var str = "London is the capital of Great Britain";
console.log(truncate("London is the capital of Great Britain",20))