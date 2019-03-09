var min = 5,
    max = 50;

    
function minMax(min, max) {
    var rand = min + Math.random() * (max - min + 1);
    rand = Math.floor(rand);
    return rand;
}    

console.log(minMax(min, max));