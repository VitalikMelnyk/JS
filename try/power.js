function pow(x, n){
var result = x;
for(var i = 1;i < n; i++){
	result = result * x;
}
return result;
}

var x =prompt("X?",'');
var n =prompt("N?",'');

if(n < 1){
	alert("Cannot");
}
else{
	alert(pow(x,n));

}	