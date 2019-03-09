function User() {
    this.firstName = "VItaliy ";
    this.surname = "Melnyk";

    this.setFirstName = function(firstName) {
        this.firstName = firstName;
    };
    this.setSurname = function(surname) {
        this.surname = surname;
    };
    this.getFullName = function() {
        return console.log(this.firstName + this.surname);
    }
}


var user = new User();

user.getFullName();
user.setFirstName("Misha ");
user.getFullName();