var week = {
    1 : "Monday",
    2 : "Tuesday",
    3 : "Wednesday",
    4 : "Thursday",
    5 : "Friday",
    6 : "Saturday",
    7 : "Sunday"
};

for(var key in week) {
    if(key == 3){
        console.log(week[key]);
    }
}

// var currentDay = prompt("Input number of day: ", '');


// switch(currentDay) {
//     case 1 :
//             alert("Monday");
//         break;
//     case 2 :
//         currentDay = "Tuesday";
//         break;    
//     case 3 : 
//         currentDay = "Wednesday";
//         break;
//     case 4 : 
//         currentDay = "Thursday";
//         break;
//     case 5 : 
//         currentDay = "Friday";
//         break;
//     case 6 : 
//         currentDay = "Saturday";
//         break;
//     case 7 : 
//         currentDay = "Sunday";
//         break;   
//     default :
//         currentDay = "Error";
//         break;                     

// }