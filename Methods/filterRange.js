var filter = [21,5,4,2,10,18,178,15,1,0];

function filterRange(array, a, b){
    for(var i = 0; i < array.length; i++){
        var newArray = array[i];

        if(newArray < a || newArray > b){
            array.splice(i--, 1);
        }
    }

}

filterRange(filter,0,5);
console.log(filter);