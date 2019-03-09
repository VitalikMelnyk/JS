var Mixin = {
      sayHi : function() {
        console.log("Hello " + this.name);
        },
    sayBye : function() {
        console.log("Bye" + this.name);
        }
 };


function User(name) {
    this.name = name;
}

for(var key in Mixin) {
    User.prototype[key] = Mixin[key];
}

new User("Vitaliy").sayHi();
