function makeArmy(){
    shooters = [];
    for(var i = 0; i < 10; i++){
        var shooter = (function(x) {
            return function() {
                    console.log(x);
            }            
        })(i);
        shooters.push(shooter);
    }
    return shooters;
}




var army = makeArmy();
army[7]();