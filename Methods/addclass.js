var home = {
    name : "My home is large"
};

function addWord(obj, cls) {
    var newWord = obj.name ? obj.name.split(' ') : [];
    for(var i = 0; i < newWord.length; i++){
    if(newWord[i] == cls){
        return;
    }
}
    newWord.push(cls);

    obj.name = newWord.join(' ');



}

addWord(home, "and");
addWord(home, "light");
addWord(home, "home");

console.log(home.name);