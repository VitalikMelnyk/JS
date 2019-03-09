

var obj = {};


Object.defineProperty(obj, "name",{
    value : "Vitaliy",
    writable : false,
    configurable : false
}); 

obj.name = "Vetal";

console.log(obj.name);