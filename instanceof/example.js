function Human() {

}

function Member() {

}
Human.prototype = Member.prototype = {};
var human = new Human();

console.log(human instanceof Member);
