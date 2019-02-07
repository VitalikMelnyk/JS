var vasya = {
    name : "Vasya",
    age : 23
}
var masha = {
    name : "Masha",
    age : 18
}
var vovochka = {
    name : "Vovochka",
    age : 6
}
var people = [vasya, masha, vovochka];  

// for(var i = 0; i < people.length; i++){
//     for()
// }

function compare(A, B){
    return A.age - B.age;
}
people.sort(compare);

for(var i = 0; i < people.length; i++){
    console.log(people[i].name);
}