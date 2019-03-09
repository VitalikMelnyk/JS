function User() {
    console.log(Object.getOwnPropertyNames(User.prototype));
    console.log(User.prototype.constructor == User);
}

var user = new User();