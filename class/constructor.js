class User {
    constructor(name){
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}





let user = new User("Vitaliy");


user.sayHi();