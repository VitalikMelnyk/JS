// function fibonacci(n){
//     if(n == 1 || n == 2){
//         return 1;
//     }
//     else{
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }
// console.log(fibonacci(7));

function fibonacci1(n){
    var a = 1;
        b = 1;
    for(var i = 3;i <= n; i++){
        var c = a + b;
        a = b;
        b = c;
    }
    return b;    
}
console.log(fibonacci1(7));