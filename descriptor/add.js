function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {
        firstName : {
            get : function() {
                return this.fullName.split(" ")[0];
            },
            set : function(newFirstName) {
                this.fullName = newFirstName + " " + this.lastName;
            } 
        },
        lastName : {
            get : function() {
                return this.fullName.split(" ")[1];
            },
            set : function(newLastName) {
                this.fullName = this.firstName + " " + newLastName;
            }
        }
    });
}
 
var user = new User("Vitaliy Melnyk");
console.log(user.firstName)
console.log(user.lastName);

user.lastName = "Melnik";
console.log(user.lastName);
console.log(user.fullName);




