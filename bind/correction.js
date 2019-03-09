var user = {
    login : "Vitaliy",
    password : 0990094989,

    loginOk : function() {
        alert(this.login + "Enter in site");
    },
    loginFail : function() {
        alert(this.login + "Failed in site");
    },

    checkPassword : function() {
        ask("Your password?",this.password, this.loginOk.bind(this), this.loginFail.bind(this));
    }
};

function ask(question, answer, ok, fail) {
    var result = prompt(question, ' ');
    if(result.toLowerCase() == answer.toLowerCase()){
        ok();
    }
    else{
        fail();
    }
};