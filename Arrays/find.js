var arr = [1,2,3,4,5,6,7,8,9,"Vitalik"]

function findElement(array, value) {
    for(var i = 0; i < arr.length; i++){
        if(value === arr[i]){
            return i;
        }
    }
    return -1;
}

console.log(findElement(arr, "Vitalik"));