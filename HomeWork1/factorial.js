var n = prompt("Input number: ",' ');


function factorial(n){
	if(n == 0 || n == 1){
		return 1;
	}
	else{
		return n * factorial(n - 1);
	}
}
alert(factorial());