var obj = {
    name : "Vitalik",
    age : 18
};
var res = obj;

console.log(res.name);

var clone = {};
for(var key in obj){
    clone[key] = obj[key];
}

console.log(clone);

clone.age = 17;
console.log(clone.age);
console.log(obj.age);