var str = " ";


function checkSpam(){
    var lowStr = str.toLowerCase();
    return Boolean(~lowStr.indexOf(("xxx") || ~lowStr.indexOf("viagra")));
}
console.log(checkSpam(str))