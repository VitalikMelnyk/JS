function ask(question, answer, ok, fail){
    var result = prompt(question, "");
    if(result.toLowerCase() == answer.toLowerCase()){
        ok();
    }
    else{
        fail();
    }
}


var user = {
    login : "Vitalik",
    password : 211193,
    loginDone : function(result) {
        alert(this.login + (result ? "Log in" : "Failure"));
    },
    checkPassword : function() {
        ask("Input Password: ", this.password, this.loginDone.bind(this, true), this.loginDone.bind(this,false));
    }
};

user.checkPassword();