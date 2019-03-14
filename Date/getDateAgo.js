var date = new Date(2015, 3, 24);

function getDateAgo(date, days) {
    var day = date.getDate();
    day -= days;
    return day;
}


console.log(getDateAgo(date, 4));

console.log(getDateAgo(date, 10));
console.log(date.getDate());