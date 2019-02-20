var arr = [1,1,1,1,12,2,3,4,5,65,2,3,4,4,3];
var setFromArr = new Set(arr);

var maxCount = 0;
var num;
    

for(var i of setFromArr) {
    var count = 1;
    for(var j = 0; j < arr.length; j++) {
        if(i == arr[j]){
            count += 1;
        }
    }
    if(count > maxCount) {
         maxCount = count;
         num = i;
        }
}

console.log(num);
console.log(maxCount);