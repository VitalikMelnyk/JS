var cars = [
    {model : "Camaro", engine : 6.0},
    {model : "Mustang", engine : 3.6},
    {model : "Charger" , engine : 2.0}
];

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i].model + " == " +  cars[i].engine);
}