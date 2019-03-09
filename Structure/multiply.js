function multiply(object) {
    for(var key in object) {
        if(isNumeric(object[key])){
            object[key] *= 2;
        }
    }
    return object;
}

function isNumeric(n) {
    return isFinite(n) && !isNaN(parseFloat(n));
}

var menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };

  console.log(multiply(menu))