function formatDate(date) {
    var options = {
        year : "2-digit",
        month : "2-digit",
        day : "2-digit"
    };

    var options1 = {
        hours : "2-digit",
        minutes : "2-digit"
    };


    var dateNow = new Date(2019, 0, 17, 4, 25);
    var det = dateNow - date;

    if (det < 1000) return "только что";
 
    if (det < 60000) return Math.floor(det / 1000) + " сек. назад";
 
    if (det < 3600000) return Math.floor(det / 60000) + " мин. назад";
 
    if (det >= 3600000) return date.toLocaleString("eng", options) + ' ' + 
    date.toLocaleString("eng", options1);
}
console.log(formatDate(new Date(2019, 0, 10, 4, 25)));
