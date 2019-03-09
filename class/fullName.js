class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get FullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set FullName(newValue) {
        [this.firstName, this.lastName] = newValue.split(" ");
    }
}




var user = new User("Melnyk", "Vitalik");

console.log(user.FullName);
user.FullName = "Misha Melnyk";
console.log(user.FullName);