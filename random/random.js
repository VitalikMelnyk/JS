var max = prompt("Input max of random: ",' ');
var min = prompt("Input min of random: ",' ');

// console.log(Math.round(Math.random() * max));


function randomInteger(min, max) {
	return Math.round( Math.random() * (max - min + 1) + min);
}
alert(randomInteger(min,max));




