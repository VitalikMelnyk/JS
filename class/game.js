
    class Character {
        constructor(settings) {
            this.name = settings.name;
            this.strength = settings.strength || 1;
            this.exp = settings.exp || 0;
            this.health = settings.health || 100;
        }
        walk(steps) {
            console.log(this.name + " walked " + steps + " steps ");
        }
        run(steps) {
            console.log(this.name + " ran " + 2 * steps + " steps ");
        }
 };


 class Human extends Character {


     build(buildingStrength) {
         this.health += buildingStrength;
     }
};

class Ork extends Character {
    getAngry(color, times) {
        if(color === "red"){
            this.strength *= times;
        }
    } 
}

class Elf extends Character {
    shoot(distance) {
        console.log(this.name + " shot an arrow to " + distance + " meters")
    }
}


var character = new Character({
    name : "Vitalik",
    strength : 15,
    exp : 10
});

var human = new Human({
    name : "Artur",
    strength : 40,
    exp : 25
});

var ork = new Ork({
    name : "Vasya",
    strength : 50,
    exp : 17 
});

var elf = new Elf({
    name : "Nicolas",
    strength : 24,
    exp : 44
});
// console.log(character);
human.build(25);
console.log(human.health);
human.walk(25);
human.run(75);

ork.getAngry("red", 3);
console.log(ork.strength);

elf.shoot(787);