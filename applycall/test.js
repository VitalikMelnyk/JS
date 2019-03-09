var user = {
    name : "Vitaliy",
    surname : "Melnyk",
    age : 25
};

function show(name, surname) {
    console.log(this.name, this.surname, this.age);
}
show.call(user,"FirstName", "SecondName","Age");