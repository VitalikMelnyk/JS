let football = {
    league : "Champions",
    age : 2008,
    teams : {
        first : "Barcelona",
        second : "Real Madrid"
    },

    stadions : ["Camp Nou", "Santiago Bernabeu"]
};

let {league, age, teams : {first, second}, stadions : [CampNou, Santiago] } = football;


console.log(league);
console.log(age);
console.log(first);
console.log(second);
console.log(CampNou);


