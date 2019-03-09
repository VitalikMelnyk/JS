function findElement(array, value) {
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return -1;  
}

var arr = [1,2,3,4,46,66];

console.log(findElement(arr,1));
console.log(findElement(arr,0));
console.log(findElement(arr,3));