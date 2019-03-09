var user = {
    name : "Vitaliy",
    age : 18
};


function Member(surname) {
    this.surname = surname;
    // this.__proto__ = user;
}

Member.prototype = user;

var member = new Member("Melnyk");
console.log(member.name + " " + member.surname);