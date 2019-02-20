var object = {
    company : "Qps",
    language : "JavaScript",
    level : "Start"
};
var keyWords = [];

for(var key in  object) {
    keyWords.push(key);
}
console.log(keyWords);
