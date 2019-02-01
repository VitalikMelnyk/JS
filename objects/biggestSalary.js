var salaries = {
    "Vitalik" : 1600,
    "Michael" : 1520,
    "Ivan" : 2000,
    "Alina" : 1520,
    "Illa" : 3000,
    "Sasha" : 3000
};
var salaries1 = {};

function biggestSalary(obj) {
var maxSalary = 0;
var maxName = "";    
    for(var name in obj){
            if(maxSalary < salaries[name]){
                maxSalary = salaries[name];
                maxName = name;
            }

        }
    return maxName;
    }


console.log(biggestSalary(salaries) || "There aren't stuffs");

console.log(biggestSalary(salaries1) || "There aren't stuffs");