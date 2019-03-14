var date = new Date();

var options = {
    weekday : "long"
};

function getWeekDay(date) {
    return date.toLocaleString("eng",options);
}

console.log(getWeekDay(date));