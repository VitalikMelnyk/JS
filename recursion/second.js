function toSum(n){
    if(n > 1){
        return n + toSum(n-1);
    }
    else{
        return n;
    }
}
console.log(toSum(3));