var user = [{
    name : "Vitalik",
    surname : "Melnyk",
    age : 18
},
{
    name : "Misha",
    surname : "Melnyk",
    age : 25
}, 
{
    name : "Illa",
    surname : "Karvatskiy",
    age : 24
}];

function byField(field) {
    return function(a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}

user.sort(byField("age"));
user.forEach(function(user){
    console.log(user.name);
});

user.sort(byField("age"));
user.forEach(function(user){
    console.log(user.surname);
});