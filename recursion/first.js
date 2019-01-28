function toSum(n){
     var result = 0;
     for(var i = 0; i <= n; i++){
        result += i;
     }
     return result; 
}
console.log(toSum(5));