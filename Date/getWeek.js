var date = new Date();
var options = {
    weekday : "short"
};

function getWeekDay(date) {
    return date.toLocaleString('ukr', options);
}

console.log(getWeekDay(date));