function unique(array) {
    var object = {};
    for(var i = 0; i < array.length; i++){
        var str = array[i];
        object[str] = true;

    }
    return Object.keys(object);
}    
    



var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];
console.log(unique(strings));