var date = new Date(2000, 1, 17);

function getLocalDay(date){
    var day = date.getDay();

    if(day == 0) {
        return day == 7;
    }
    return day;
}

console.log(getLocalDay(date))