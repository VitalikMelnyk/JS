function formatDate(date) {
    var type = {}.toString.call(date).slice(8, -1);
    var res;
    switch(type){
        case "String" :
            res = new Date(date);
            break;
        
        case "Number" :
            res = new Date(date * 1000);
            break;
        
        case "Array" : 
            res = new Date(date[0], date[1], date[2]);
            break;

        default : 
            res = date;
    }
    return res.toLocaleString("ru", {
        day : "2-digit",
        month : "2-digit",
        year : "2-digit"
    });
};

console.log( formatDate('2011-10-02') ); // 02.10.11
console.log( formatDate(1234567890) ); // 14.02.09
console.log( formatDate([2014, 0, 1]) ); // 01.01.14
console.log( formatDate(new Date(2014, 0, 1)) ); // 01.01.14
