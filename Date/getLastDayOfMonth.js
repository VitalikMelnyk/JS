function getLastDayOfMonth(year, month) {
    var lastDay = new Date(year, month + 1, 0);
    return lastDay.getDate(); 
}

console.log(getLastDayOfMonth(2000, 2));



// var date = new Date(2012, 1);