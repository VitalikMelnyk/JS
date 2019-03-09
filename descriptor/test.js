var user = {
    firstName : "Vitaliy",
    surname : "Melnyk"
};

Object.defineProperty(user,     "FullName:" , {
    get : function() {
        return this.firstName + " " + this.surname;
    }
});

console.log(user.FullName); 