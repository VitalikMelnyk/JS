var arr = [1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15,16,17,18,19];

function filtered(array, a, b){
    var result = [];


    for(var i = 0; i < array.length; i++){
        if(array[i] >= a && array[i] <= b){
            result.push(array[i]);
        }
    }
    return result;
}   

console.log(filtered(arr, 3, 17));

