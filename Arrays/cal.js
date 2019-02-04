var arr = [];

while(true) {
	var thing = prompt("Input value",0);
	
	if(thing === "", || isNaN(thing) || thing === null){
		break;
	}
	arr.push(+thing);

}
sum = 0;
for(var i = 0; i < arr.length; i++){
	var sum += arr[i]; 
}

console.log(sum);