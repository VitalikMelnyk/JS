function factorial(n){
    if(n == 1 || n == 0){
        return 1;
    } 
    else{
        return n * factorial(n - 1);
    }
    
}
var number = prompt("Input number: ", '');
console.log(factorial(number));
// console.log(factorial(0));