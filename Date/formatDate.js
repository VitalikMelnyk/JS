function formatDate(date) {
    var day = date.getDate();
    if(day < 10) {
        day = "0" + day;
    };

    var month = date.getMonth();
    if(month < 10) {
        month = "0" + month;
    };

    var year = date.getFullYear() % 100;
    if(year < 10) {
        year = "0" + year;
    }

    return day + "." + month + "." + year; 
}

var date = new Date(2012, 1, 17);
// console.log(date);
console.log(formatDate(date));