var obj = {};


console.log(obj.__proto__ == Object.prototype);
console.log(obj.toString() == Object.prototype.toString());
console.log(obj.__proto__.__proto__);