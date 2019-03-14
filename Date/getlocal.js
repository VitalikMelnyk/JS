var date = new Date();

function getLocalDate(date){
    var day = date.getDay();

    if(day == 0) {
        return day == 7;
    }

    return day;
}

console.log(getLocalDate(date));