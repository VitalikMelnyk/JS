function checkSpam(str) {
    var newStr = str.toLowerCase();
    if(newStr === "viagra" || newStr === "xxx") {
        return true;
    }

    return false;

}

var str = "VIAGRA",
    str1 = "VIAgRA",
    str2 = "vIAGRA",
    str3 = "XXx",
    str4 = "qegr";

console.log(checkSpam(str));
console.log(checkSpam(str1));
console.log(checkSpam(str2));
console.log(checkSpam(str3));
console.log(checkSpam(str4));
    
