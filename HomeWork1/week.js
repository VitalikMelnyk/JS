var number = prompt("input number of day: ",' ');


function weekDay1(){
 	if(number == 1){
 	alert("Monday!");
	}
 	else if(number == 2){
 		alert("Tuesday!");	
 	}
 	else if(number == 3){
 		alert("Wednesday!");
 	}
 	else if(number == 4){
 		alert("Thursday!");
 	}
 	else if(number == 5){
 		alert("Friday!");
 	}
 	else if(number == 6){
 		alert("Saturday!");
 	}
 	else if(number == 7){
 		alert("Sunday!");
 	}
 	else{
 		alert("Error!");
 	}	
 }


function weekDay2(){
	switch(number){
		case "1" : alert("Monday!");
			break;
		case "2" : alert("Tuesday!");
			break;
		case "3" : alert("Wednesday!");
			break;
		case "4" : alert("Thursday!");
			break;
		case "5" : alert("Friday!");
			break;
		case "6" : alert("Saturday!");
			break;
		case "7" : alert("Sunday!");
			break;
		default : alert("Error");
			break;	

	}
}


console.log(weekDay1());
console.log(weekDay2());
