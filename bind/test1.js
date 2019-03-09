var user = {
    name : "Vitalik ", 
    surname : "Melnyk",

    fullName : function() {
        console.log(this.name + this.surname);
    }
}

setTimeout(user.fullName(),1000);