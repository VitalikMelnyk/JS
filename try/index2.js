var user = prompt("Are you Admin?",' ');
if (user == "Admin") {
	var	password = prompt("What is you login?",' ');
	if (password == "Black ring") {
		alert("Welcome!");
	}
	else if (password == null) {
		alert("Entry canceled");
	}
	else{
		alert("Another");
	}

}
else if (user == null ) {
	alert("Entry canceled");
}
else{
	alert("I don't know you");
}