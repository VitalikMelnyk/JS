var arr = {
    name :"My name name"
}
  
function removeClass(array, cls) {
    var newArr = array.name.split(" ");
    for(var i = 0; i < newArr.length; i++) {
        if(newArr[i] === cls){
            newArr.splice(i, 1);
             i--;
        }
    }
    return array.name = newArr.join(' ');
}

removeClass(arr, "name");
console.log(arr.name);