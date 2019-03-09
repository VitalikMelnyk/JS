function trim(str, maxlength) {
    if(str.length < maxlength){
        return str;
    }
    else{
        return str = str.slice(0,maxlength - 3) + "...";
    }
}
console.log(trim("ddsghfjgkl;ulykjhgshjkyuy;uilykjh",20));