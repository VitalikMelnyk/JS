var numbers = [];

for(var i = 2; i < 120; i++) {
    numbers[i] = true;
}

p = 2;
do { 
    for(i = 2 * p; i < 120; i += p){
        numbers[i] = false;
    }

    for(i = p + 1; i < 120; i++){
        if(numbers[i]){
            break;
        }
    }
    p = i;
} while(p * p < 120);

sum = 0;
for(i = 0; i < numbers.length; i++){
    if(numbers[i]) {
        sum = sum + i;
    }
}
console.log(sum);
